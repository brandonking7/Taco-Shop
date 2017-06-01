class RemoveSalsaFromTacos < ActiveRecord::Migration[5.0]
  def change
    remove_column :tacos, :salsa, :string
  end
end
