import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const Language = () => {
  const { t, i18n } = useTranslation();
  const [isLangsOpen, setIsLangeOpen] = useState(false);
  const currentLang = i18n.resolvedLanguage;

  const toggleLangs = () => {
    setIsLangeOpen((v) => !v);
  };

  const langs = ['kor', 'eng'];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container className={cn('Language', { isLangsOpen })}>
      <LanguageOpen onClick={toggleLangs}>Language</LanguageOpen>
      <LanguageList>
        {langs.map((lang) => (
          <LanguageBtn key={lang} onClick={() => changeLang(lang)} className={currentLang === lang ? 'isActive' : ''}>
            {lang}
          </LanguageBtn>
        ))}
      </LanguageList>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 30px;
  position: relative;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const LanguageOpen = styled.button`
  display: block;
  width: 80px;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  .isTerms & {
    color: #333;
  }
`;
const LanguageList = styled.div`
  position: absolute;
  top: 25px;
  left: 0;
  width: 80px;
  transition: all 0.4s;
  height: 0;
  visibility: hidden;
  opacity: 0;
  .isLangsOpen & {
    visibility: visible;
    opacity: 1;
    display: flex;
    flex-direction: column;
    height: 83px;
  }
`;

const LanguageBtn = styled.button`
  width: 100%;
  display: block;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  background: #161616;
  padding: 10px;
  text-transform: uppercase;
  &:first-child {
    border-bottom: 1px solid #323232;
  }
  &.isActive,
  &:hover {
    color: #ef8226;
  }
`;

export default Language;
