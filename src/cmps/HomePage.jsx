import React from 'react';
import '../cssFiles/HomePage.css';
import CommunicationPlatforms from '../../public/CommunicationPlatforms.png';
import CRM_Systems from '../../public/CRM_Systems.png';
import FeatureHomePage from './FeatureHomePage';

function HomePage({ t }) {
  // מגדיר את האייטמים כאובייקט עם מפתחות
  const items = {
    feature1: {
      id: 1,
      title: t.feature1,
      description: t.feature1Description1,
    },
    feature2: {
      id: 2,
      title: t.feature2,
      description: t.feature2Description2,
    },
    feature3: {
      id: 3,
      title: t.feature3,
      description: t.feature3Description3,
    },
    feature4: {
      id: 1,
      title: t.feature1,
      description: t.feature1Description1,
    },
    feature5: {
      id: 2,
      title: t.feature2,
      description: t.feature2Description2,
    },

  };

  // המרה לערכים של המערך כדי שנוכל לספור אותם
  const itemsArray = Object.values(items);

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="title-description-h1" >{t.homPageTitle}</h1>
        <h2 className="title-description-h2">
          {t.homPageDescription}
        </h2>
        <h1 className="integration-title">
          {t.integrationTitle}
        </h1>
        <h2 className="integration-description">
          {t.integrationDescription}
        </h2>
        <div className="integration-icons">
          <div className="integration-icon">
            <img src={CRM_Systems} alt="CRM Systems" />
            <h2 className="CRM_Systems-title">
              {t.CRM_SystemsIntegrationTitle}
            </h2>
            <p className="CRM_Systems-description">
              {t.CRM_SystemsIntegrationDescription}
            </p>
          </div>
          <div className="integration-icon">
            <img src={CommunicationPlatforms} alt="Communication Platforms" />
            <h2 className="CommunicationPlatforms-title">
              {t.CommunicationPlatformsIntegrationTitle}
            </h2>
            <p className="CommunicationPlatforms-description">
              {t.CommunicationPlatformsIntegrationDescription}
            </p>
          </div>
        </div>
        <h2 className="features-title">
          {t.featuresTitle}
        </h2>
        <h3 className="features-description">
          {t.featuresDescription}
        </h3>
        {/* שימוש באורך המערך ולא באורך האובייקט */}
        <div className={`features-container items-${itemsArray.length}`}>
          {
            itemsArray.map(item =>
              <FeatureHomePage title={item.title} description={item.description} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;