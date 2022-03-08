import React, {useState, useEffect, isValidElement, cloneElement} from 'react';
import axiosInstance from './axiosInstance';

const GetPortfolioProjects = (props) => {

  const [portfolioProjects, setPortfolioProjects] = useState(null)


  useEffect(() => {
    axiosInstance.get('projects/')
    .then((res) => {
      setPortfolioProjects(res);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(portfolioProjects)
  const returnChildrenWithProps = React.Children.map( props.children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, portfolioProjects)
    }
  })
  if (portfolioProjects) {
  return (
    <>
    {returnChildrenWithProps}
    </>
  )}
  else {
    return <></>
  }
};

export default GetPortfolioProjects