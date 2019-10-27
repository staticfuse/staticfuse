import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SectionHeader from './SectionHeader';
import SectionLink from './SectionLink';
import SectionSubLink from './SectionSubLink';
import StyledToc from './StyledToc';

const Toc = ({ currentSlug }) => {
  const data = useStaticQuery(graphql`
  query TableOfContents {
    allStaticFuseDocToc {
      nodes {
        label
        path
        id
        isHeader
        childItems {
          id
          label
          path
        }
      }
    }
  }
`);

  const getSlug = (path) => {
    let slug = path.replace('/docs/', '');
    slug = slug.replace(/\//g, '');
    return slug;
  };

  const slugNoSlashes = getSlug(currentSlug);
  const { nodes } = data.allStaticFuseDocToc;

  const sections = nodes.map((doc) => {
    const isActive = slugNoSlashes === getSlug(doc.path) ? 'is-active' : '';

    const linkOrHeader = doc.isHeader ? (
      <SectionHeader label={doc.label} />
    ) : (
      <SectionLink
        label={doc.label}
        path={doc.path}
        currentSlug={currentSlug}
        isActive={isActive}
      />
    );

    return (
      <div className="doc-section" key={doc.id}>
        {linkOrHeader}
        {doc.childItems
          && doc.childItems.map((childDoc) => (
            <div key={childDoc.label + doc.isHeader} className="sub-doc">
              <SectionSubLink
                path={childDoc.path}
                label={childDoc.label}
                currentSlug={currentSlug}
                isActive={slugNoSlashes === getSlug(childDoc.path) ? 'is-active' : ''}
              />
            </div>
          ))}
      </div>
    );
  });

  return (
    <StyledToc>
      {sections}
    </StyledToc>
  );
};
export default Toc;
