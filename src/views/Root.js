import React, { useState, useEffect } from 'react';
import { getNasaDataByDate } from '../services/nasaService';
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
    const [selectedDate, setSelectedDate] = useState('');
    const [currentDisplayedDate, setCurrentDisplayedDate] = useState(JSON.parse(window.localStorage.getItem('currentDisplayedDate')) || {});
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        setIsLoading(false);
        if (window.localStorage !== undefined) {
            const data = window.localStorage.getItem('data');
            if (data) {
                setData(JSON.parse(data));
            }
        }
    }, []);

    const handleDate = async ({ target }) => {
        const selectedDateValue = target.value;
        setIsLoading(true);
        const result = await getNasaDataByDate(selectedDateValue);
        setData(result);
        setIsLoading(false);
    };

    return /* XXX tutaj wyzea component layout */ null;
}

export default Root;