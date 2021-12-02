import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

const LanguageMobile = () => {
  const { t, i18n } = useTranslation();
  const [isLangsOpen, setIsLangeOpen] = useState(false);

  const langs = ['kor', 'eng'];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container className={cn('Language', 'hidden-desktop', { isLangsOpen })}>
      <LanguageList>
        {langs.map((lang) => (
          <LanguageBtn key={lang} onClick={() => changeLang(lang)}>
            {lang}
          </LanguageBtn>
        ))}
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
`;

export default LanguageMobile;
