/*
  # Update enrollments table policies

  1. Changes
    - Remove authentication requirement for INSERT
    - Add public policy for inserting enrollments
    - Keep read policy restricted to authenticated users

  2. Security
    - Allow public insertions
    - Maintain read restrictions
*/

-- Drop existing insert policy
DROP POLICY IF EXISTS "Users can insert enrollments" ON enrollments;

-- Create new public insert policy
CREATE POLICY "Allow public enrollments"
  ON enrollments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Keep existing select policy
DROP POLICY IF EXISTS "Users can read own enrollments" ON enrollments;
CREATE POLICY "Users can read own enrollments"
  ON enrollments
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = enrollments.email
  ));