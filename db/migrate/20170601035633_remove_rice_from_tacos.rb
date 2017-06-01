class RemoveRiceFromTacos < ActiveRecord::Migration[5.0]
  def change
    remove_column :tacos, :rice, :string
  end
end
