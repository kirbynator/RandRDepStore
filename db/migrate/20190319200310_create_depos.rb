class CreateDepos < ActiveRecord::Migration[5.2]
  def change
    create_table :depos do |t|
      t.string :name

      t.timestamps
    end
  end
end
