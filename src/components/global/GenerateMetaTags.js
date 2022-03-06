import React, {useState, useEffect } from 'react';
import axiosInstance from '../global/axiosInstance';
import { useHistory } from 'react-router-dom';

import MetaTags from 'react-meta-tags';


const GenerateMetaTags = () => {

  // Initialise a variable and set it to the history object.
  const history = useHistory();

  const [pageLocation, setPageLocation] = useState(history.location.pathname);

  const [metaData, setMetaData] = useState({
    page_image: '',
    meta_title: '',
    meta_description: '',
    page: '',
    robots: ''
  });

  useEffect(() => {
    axiosInstance.post('get-page-metadata/', { location: pageLocation }, {withCredentials: true})
      .then((res) => {
        setMetaData(res.data);
      })
     
  }, [])

  return (
    <MetaTags>
      <meta name="robots" content={metaData.robots ? 'all' : 'noindex'} />
      <title>{metaData.meta_title}</title>
      <meta name="description" content={metaData.meta_description} />
      <meta property="og:title" content={metaData.meta_title} />
      <meta property="og:description" content={metaData.meta_description} />
      <meta property="og:image" content={metaData.page_image} />
    </MetaTags>
  )
};

export default GenerateMetaTags;
