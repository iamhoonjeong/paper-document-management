import React from 'react';
import { Breadcrumb } from 'antd';

type BreadCrumbProps = {
  crumb: string[];
};

const BreadCrumb = ({ crumb }: BreadCrumbProps) => {
  return (
    <Breadcrumb style={{ fontSize: '12px' }}>
      {crumb.map((crumb) => {
        return <Breadcrumb.Item>{crumb}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default BreadCrumb;
