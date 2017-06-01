class AddSalsaToTacos < ActiveRecord::Migration[5.0]
  def change
    add_column :tacos, :salsa, :boolean, default: false
  end
end
