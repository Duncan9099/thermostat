describe Thermostat do

  describe '.get_temperature' do
    it 'returns the saved temperature' do
      expect(Thermostat.get_temperature).to eq 20
    end
  end
end
