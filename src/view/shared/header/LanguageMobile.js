import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const LanguageMobile = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const [isLangsOpen, setIsLangeOpen] = useState(false);
  const langs = ['kor', 'eng'];
  const currentLang = i18n.resolvedLanguage;

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    onClose();
  };

  return (
    <Container className={cn('Language', 'hidden-desktop', { isLangsOpen })} onClose={onClose}>
      <LanguageList>
        {langs.map((lang) => {
          return (
            <LanguageBtn key={lang} onClick={() => changeLang(lang)} className={currentLang === lang ? 'isActive' : ''}>
              {lang}
            </LanguageBtn>
          );
        })}
      </LanguageList>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  /* top:550px; */
  top: 73%;
`;

const LanguageList = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const LanguageBtn = styled.button`
  width: 100%;
  color: #747474;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 30px;
  text-transform: uppercase;
  &:first-child {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 12px;
      width: 1px;
      height: 10px;
      background: #747474;
    }
  }
  &.isActive {
    color: #ef8226;
  }
`;

export default LanguageMobile;
