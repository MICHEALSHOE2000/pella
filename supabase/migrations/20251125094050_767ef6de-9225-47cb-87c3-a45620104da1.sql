-- Create estates table for property listings
CREATE TABLE public.estates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  land_size TEXT NOT NULL,
  price_per_plot DECIMAL(15, 2) NOT NULL,
  total_plots INTEGER,
  available_plots INTEGER,
  estate_type TEXT CHECK (estate_type IN ('residential', 'farm_to_estate', 'mixed')) DEFAULT 'residential',
  has_farming_period BOOLEAN DEFAULT false,
  farming_duration_years INTEGER,
  features JSONB DEFAULT '[]'::jsonb,
  amenities JSONB DEFAULT '[]'::jsonb,
  image_url TEXT,
  gallery_images JSONB DEFAULT '[]'::jsonb,
  payment_plans JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create pella_courts table for pre-built flats
CREATE TABLE public.pella_courts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  bedroom_count INTEGER NOT NULL CHECK (bedroom_count IN (1, 2)),
  location TEXT NOT NULL,
  price DECIMAL(15, 2) NOT NULL,
  size_sqm DECIMAL(10, 2),
  features JSONB DEFAULT '[]'::jsonb,
  amenities JSONB DEFAULT '[]'::jsonb,
  image_url TEXT,
  gallery_images JSONB DEFAULT '[]'::jsonb,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create user profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create wealth titans marketers table
CREATE TABLE public.wealth_titans_marketers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  referral_code TEXT UNIQUE NOT NULL,
  sponsor_id UUID REFERENCES public.wealth_titans_marketers(id),
  experience_level TEXT CHECK (experience_level IN ('beginner', 'intermediate', 'expert')),
  total_sales DECIMAL(15, 2) DEFAULT 0,
  total_commission DECIMAL(15, 2) DEFAULT 0,
  status TEXT CHECK (status IN ('pending', 'active', 'suspended')) DEFAULT 'pending',
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create sales/referrals tracking table
CREATE TABLE public.sales_referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  marketer_id UUID REFERENCES public.wealth_titans_marketers(id) ON DELETE CASCADE NOT NULL,
  estate_id UUID REFERENCES public.estates(id),
  pella_court_id UUID REFERENCES public.pella_courts(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT,
  customer_phone TEXT,
  sale_amount DECIMAL(15, 2) NOT NULL,
  commission_amount DECIMAL(15, 2) NOT NULL,
  commission_rate DECIMAL(5, 2) DEFAULT 10.00,
  sale_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  status TEXT CHECK (status IN ('pending', 'confirmed', 'paid')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create cooperative investment types enum
CREATE TYPE public.investment_type AS ENUM ('target_savings', 'land_banking', 'adopt_a_farm');

-- Create cooperative investments table
CREATE TABLE public.cooperative_investments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  investment_type public.investment_type NOT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  expected_roi_percentage DECIMAL(5, 2),
  duration_months INTEGER,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  maturity_date TIMESTAMP WITH TIME ZONE,
  current_value DECIMAL(15, 2),
  status TEXT CHECK (status IN ('active', 'matured', 'withdrawn', 'cancelled')) DEFAULT 'active',
  details JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create bookings/reservations table
CREATE TABLE public.property_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  estate_id UUID REFERENCES public.estates(id),
  pella_court_id UUID REFERENCES public.pella_courts(id),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  number_of_plots INTEGER,
  total_amount DECIMAL(15, 2) NOT NULL,
  payment_plan TEXT,
  deposit_amount DECIMAL(15, 2),
  status TEXT CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')) DEFAULT 'pending',
  booking_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.estates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pella_courts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wealth_titans_marketers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sales_referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cooperative_investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for estates (public read)
CREATE POLICY "Estates are viewable by everyone"
  ON public.estates FOR SELECT
  USING (is_active = true);

-- RLS Policies for pella_courts (public read)
CREATE POLICY "Pella Courts are viewable by everyone"
  ON public.pella_courts FOR SELECT
  USING (is_available = true);

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- RLS Policies for wealth titans marketers
CREATE POLICY "Marketers can view their own data"
  ON public.wealth_titans_marketers FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert their marketer profile"
  ON public.wealth_titans_marketers FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Marketers can update their own data"
  ON public.wealth_titans_marketers FOR UPDATE
  USING (user_id = auth.uid());

-- RLS Policies for sales referrals
CREATE POLICY "Marketers can view their own sales"
  ON public.sales_referrals FOR SELECT
  USING (
    marketer_id IN (
      SELECT id FROM public.wealth_titans_marketers WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Marketers can insert their own sales"
  ON public.sales_referrals FOR INSERT
  WITH CHECK (
    marketer_id IN (
      SELECT id FROM public.wealth_titans_marketers WHERE user_id = auth.uid()
    )
  );

-- RLS Policies for cooperative investments
CREATE POLICY "Users can view their own investments"
  ON public.cooperative_investments FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can create their own investments"
  ON public.cooperative_investments FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own investments"
  ON public.cooperative_investments FOR UPDATE
  USING (user_id = auth.uid());

-- RLS Policies for property bookings
CREATE POLICY "Users can view their own bookings"
  ON public.property_bookings FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can create bookings"
  ON public.property_bookings FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own bookings"
  ON public.property_bookings FOR UPDATE
  USING (user_id = auth.uid());

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add updated_at triggers
CREATE TRIGGER set_updated_at_estates
  BEFORE UPDATE ON public.estates
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_pella_courts
  BEFORE UPDATE ON public.pella_courts
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_profiles
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_wealth_titans
  BEFORE UPDATE ON public.wealth_titans_marketers
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_cooperative
  BEFORE UPDATE ON public.cooperative_investments
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_updated_at_bookings
  BEFORE UPDATE ON public.property_bookings
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();