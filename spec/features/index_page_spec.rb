
feature 'score table page' do
  before { visit '/' }

  context 'frame header' do
    scenario 'content set to Frame' do
      expect(page).to have_content('Frame')
    end
  end

  context 'roll header' do
    scenario 'content set to Roll' do
      expect(page).to have_content('Roll')
    end
  end

  context 'Knocked pins header' do
    scenario 'content set to Knocked-pins' do
      expect(page).to have_content('Knocked-pins')
    end
  end

  context 'total score header' do
    scenario 'content set to Total-score' do
      expect(page).to have_content('Total-score')
    end
  end

  context 'Notes header' do
    scenario 'content set to Notes' do
      expect(page).to have_content('Notes')
    end
  end
end
