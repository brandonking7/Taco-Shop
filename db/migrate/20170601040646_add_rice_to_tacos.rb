class AddRiceToTacos < ActiveRecord::Migration[5.0]
  def change
    add_column :tacos, :rice, :boolean, default: false
  end
end
