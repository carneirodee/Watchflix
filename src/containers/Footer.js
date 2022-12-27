import React from 'react';
import { FooterContainer } from '../components/commons/containers/index';
import Tabs from '../components/Tabs';
import General from '../components/General';
import Cast from '../components/Cast';

function Footer(props) {

  const { synopsis, cast } = props;

  const tabs = [
    {
      title: 'General',
      component: <General synopsis={synopsis} />
    },
    {
      title: 'Elenco',
      component: <Cast cast={cast} />

    },
    {
      title: 'Premiações',
      component: <Cast cast={cast} />
    }
  ]

  return (
    <FooterContainer>{synopsis}</FooterContainer>
  );
}

export default Footer;
