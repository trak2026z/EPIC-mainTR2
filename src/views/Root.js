import React, { useState, useEffect } from 'react';
import { getNasaDataByDate } from '../services/nasaService';
import { parseDate } from '../utils/dateUtils';
import { distanceBetweenObjects } from '../utils/mathUtils';
import { saveToStorage, getFromStorage } from '../books/storage';
import 'swiper/css';
import 'views/App.css';
import 'swiper/css/navigation';
import { GlobalStyle } from 'assets/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { StyledContainer } from 'components/templates/StyledContainer/StyledContainer.style';
import { StyledWrapper } from 'components/templates/StyledWrapper/StyledWrapper.style';
import SwiperComponent from 'components/organisms/SwiperComponent/SwiperComponent';
import LeftComponent from 'components/organisms/LeftComponent/LeftComponent';
import CurrentSlideInfo from 'components/molecues/CurrentSlideInfo/CurrentSlideInfo';

function Root() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(''
); 
  const [currentDisplayedDate, setCurrentDisplayedDate] = useState(getFromStorage('currentDisplayedDate') || {});
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setIsLoading(false);
    const stored = getFromStorage('data');
    if (stored) {
      setData(stored);
    }
  }, []);

  const handleDate = async ({ target }) => {
    setIsLoading(true);
    const parsed = parseDate(target.value);
    setSelectedDate(parsed);
    const fetched = await getNasaDataByDate(parsed.fullDate);
    setData(fetched);
    saveToStorage('data', fetched);
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledContainer>
        <StyledWrapper>
          <SwiperComponent on$dateSelect={handleDate} data={data} />
          <LeftComponent />
          <CurrentSlideInfo data={data[currentSlideIndex]} />
        </StyledWrapper>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default Root;