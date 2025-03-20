/*
  # Create enrollments table

  1. New Tables
    - `enrollments`
      - `id` (uuid, primary key)
      - `full_name` (text, not null)
      - `email` (text, not null)
      - `transaction_id` (text, not null)
      - `referral_email` (text)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `enrollments` table
    - Add policy for authenticated users to read their own data
    - Add policy for authenticated users to insert data
*/

CREATE TABLE IF NOT EXISTS enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  transaction_id text NOT NULL,
  referral_email text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = enrollments.email
  ));

CREATE POLICY "Users can insert enrollments"
  ON enrollments
  FOR INSERT
  TO authenticated
  WITH CHECK (true);