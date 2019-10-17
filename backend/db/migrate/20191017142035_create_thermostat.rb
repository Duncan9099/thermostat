class CreateThermostat < ActiveRecord::Migration[6.0]
  def change
    create_table :thermostat do |t|
      t.integer :temperature, :default => 20
      t.boolean :psm, :default => true
  end
end
