export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      cooperative_investments: {
        Row: {
          amount: number
          created_at: string | null
          current_value: number | null
          details: Json | null
          duration_months: number | null
          expected_roi_percentage: number | null
          id: string
          investment_type: Database["public"]["Enums"]["investment_type"]
          maturity_date: string | null
          start_date: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          current_value?: number | null
          details?: Json | null
          duration_months?: number | null
          expected_roi_percentage?: number | null
          id?: string
          investment_type: Database["public"]["Enums"]["investment_type"]
          maturity_date?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          current_value?: number | null
          details?: Json | null
          duration_months?: number | null
          expected_roi_percentage?: number | null
          id?: string
          investment_type?: Database["public"]["Enums"]["investment_type"]
          maturity_date?: string | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cooperative_investments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      estates: {
        Row: {
          amenities: Json | null
          available_plots: number | null
          created_at: string | null
          description: string | null
          estate_type: string | null
          farming_duration_years: number | null
          features: Json | null
          gallery_images: Json | null
          has_farming_period: boolean | null
          id: string
          image_url: string | null
          is_active: boolean | null
          land_size: string
          location: string
          name: string
          payment_plans: Json | null
          price_per_plot: number
          slug: string
          total_plots: number | null
          updated_at: string | null
        }
        Insert: {
          amenities?: Json | null
          available_plots?: number | null
          created_at?: string | null
          description?: string | null
          estate_type?: string | null
          farming_duration_years?: number | null
          features?: Json | null
          gallery_images?: Json | null
          has_farming_period?: boolean | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          land_size: string
          location: string
          name: string
          payment_plans?: Json | null
          price_per_plot: number
          slug: string
          total_plots?: number | null
          updated_at?: string | null
        }
        Update: {
          amenities?: Json | null
          available_plots?: number | null
          created_at?: string | null
          description?: string | null
          estate_type?: string | null
          farming_duration_years?: number | null
          features?: Json | null
          gallery_images?: Json | null
          has_farming_period?: boolean | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          land_size?: string
          location?: string
          name?: string
          payment_plans?: Json | null
          price_per_plot?: number
          slug?: string
          total_plots?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pella_courts: {
        Row: {
          amenities: Json | null
          bedroom_count: number
          created_at: string | null
          features: Json | null
          gallery_images: Json | null
          id: string
          image_url: string | null
          is_available: boolean | null
          location: string
          name: string
          price: number
          size_sqm: number | null
          updated_at: string | null
        }
        Insert: {
          amenities?: Json | null
          bedroom_count: number
          created_at?: string | null
          features?: Json | null
          gallery_images?: Json | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          location: string
          name: string
          price: number
          size_sqm?: number | null
          updated_at?: string | null
        }
        Update: {
          amenities?: Json | null
          bedroom_count?: number
          created_at?: string | null
          features?: Json | null
          gallery_images?: Json | null
          id?: string
          image_url?: string | null
          is_available?: boolean | null
          location?: string
          name?: string
          price?: number
          size_sqm?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      property_bookings: {
        Row: {
          booking_date: string | null
          created_at: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          deposit_amount: number | null
          estate_id: string | null
          id: string
          notes: string | null
          number_of_plots: number | null
          payment_plan: string | null
          pella_court_id: string | null
          status: string | null
          total_amount: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          booking_date?: string | null
          created_at?: string | null
          customer_email: string
          customer_name: string
          customer_phone: string
          deposit_amount?: number | null
          estate_id?: string | null
          id?: string
          notes?: string | null
          number_of_plots?: number | null
          payment_plan?: string | null
          pella_court_id?: string | null
          status?: string | null
          total_amount: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          booking_date?: string | null
          created_at?: string | null
          customer_email?: string
          customer_name?: string
          customer_phone?: string
          deposit_amount?: number | null
          estate_id?: string | null
          id?: string
          notes?: string | null
          number_of_plots?: number | null
          payment_plan?: string | null
          pella_court_id?: string | null
          status?: string | null
          total_amount?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_bookings_estate_id_fkey"
            columns: ["estate_id"]
            isOneToOne: false
            referencedRelation: "estates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_bookings_pella_court_id_fkey"
            columns: ["pella_court_id"]
            isOneToOne: false
            referencedRelation: "pella_courts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_bookings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_referrals: {
        Row: {
          commission_amount: number
          commission_rate: number | null
          created_at: string | null
          customer_email: string | null
          customer_name: string
          customer_phone: string | null
          estate_id: string | null
          id: string
          marketer_id: string
          pella_court_id: string | null
          sale_amount: number
          sale_date: string | null
          status: string | null
        }
        Insert: {
          commission_amount: number
          commission_rate?: number | null
          created_at?: string | null
          customer_email?: string | null
          customer_name: string
          customer_phone?: string | null
          estate_id?: string | null
          id?: string
          marketer_id: string
          pella_court_id?: string | null
          sale_amount: number
          sale_date?: string | null
          status?: string | null
        }
        Update: {
          commission_amount?: number
          commission_rate?: number | null
          created_at?: string | null
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string | null
          estate_id?: string | null
          id?: string
          marketer_id?: string
          pella_court_id?: string | null
          sale_amount?: number
          sale_date?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_referrals_estate_id_fkey"
            columns: ["estate_id"]
            isOneToOne: false
            referencedRelation: "estates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_referrals_marketer_id_fkey"
            columns: ["marketer_id"]
            isOneToOne: false
            referencedRelation: "wealth_titans_marketers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_referrals_pella_court_id_fkey"
            columns: ["pella_court_id"]
            isOneToOne: false
            referencedRelation: "pella_courts"
            referencedColumns: ["id"]
          },
        ]
      }
      wealth_titans_marketers: {
        Row: {
          created_at: string | null
          experience_level: string | null
          id: string
          joined_at: string | null
          referral_code: string
          sponsor_id: string | null
          status: string | null
          total_commission: number | null
          total_sales: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          experience_level?: string | null
          id?: string
          joined_at?: string | null
          referral_code: string
          sponsor_id?: string | null
          status?: string | null
          total_commission?: number | null
          total_sales?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          experience_level?: string | null
          id?: string
          joined_at?: string | null
          referral_code?: string
          sponsor_id?: string | null
          status?: string | null
          total_commission?: number | null
          total_sales?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wealth_titans_marketers_sponsor_id_fkey"
            columns: ["sponsor_id"]
            isOneToOne: false
            referencedRelation: "wealth_titans_marketers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wealth_titans_marketers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      investment_type: "target_savings" | "land_banking" | "adopt_a_farm"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      investment_type: ["target_savings", "land_banking", "adopt_a_farm"],
    },
  },
} as const
