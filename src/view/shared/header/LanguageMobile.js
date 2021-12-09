import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const LanguageMobile = () => {
  const { t, i18n } = useTranslation();
  const [isLangsOpen, setIsLangeOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const langs = ['kor', 'eng'];
  const currentLang = i18n.resolvedLanguage;

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  console.log('현재  언어', i18n.resolvedLanguage);

  return (
    <Container className={cn('Language', 'hidden-desktop', { isLangsOpen })}>
      <LanguageList>
        {langs.map((lang) => {
          console.log(currentLang === lang);
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
  top: 70%;
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
