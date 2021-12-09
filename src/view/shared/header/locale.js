import create from 'zustand';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import cn from 'classnames';

export const locale = () => {
  return <Container>locale</Container>;
};

export const LocaleChoose = () => {
  const { t, i18n } = useTranslation();
  const [isLangsOpen, setIsLangeOpen] = useState(false);
  const currentLang = i18n.resolvedLanguage;

  const toggleLangs = () => {
    setIsLangeOpen((v) => !v);
  };

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const langs = ['kor', 'eng'];

  return (
    <Container className={cn('Language', 'hidden-mobile', { isLangsOpen })}>
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

const Container = styled.div``;

const LanguageList = styled.div``;

const LanguageBtn = styled.button``;
