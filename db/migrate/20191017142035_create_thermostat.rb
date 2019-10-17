class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.integer :temperature, :default => 20
      t.boolean :psm, :default => true
    end
  end
end
