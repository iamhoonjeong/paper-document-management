import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';

import PageTitle from '../../components/PageTitle';

const DocumentList = () => {
  const columns = [
    {
      title: '문서 ID',
      dataIndex: 'documentId',
    },
    {
      title: '문서 명',
      dataIndex: 'documentName',
    },
    {
      title: '생성 일시',
      dataIndex: 'createDate',
    },
    {
      title: '수정 일시',
      dataIndex: 'modifiedDate',
    },
    {
      title: '문서 수정',
      dataIndex: 'documentModify',
      width: '80px',
    },
  ];
  const data: any = [];
  for (let i = 0; i < 500; i++) {
    data.push({
      key: i,
      documentId: 100000 + i,
      documentName: `문서 ${i}`,
      createDate: `2021-11-11 14:43:15`,
      modifiedDate: `2021-11-11 14:43:15`,
      documentModify: <ModifyButton type="primary">수정</ModifyButton>,
    });
  }
  const [state, setState] = useState({
    selectedRowKeys: [],
  });
  const onSelectChange = (selectedRowKeys: any) => {
    setState({ selectedRowKeys });
  };

  const { selectedRowKeys } = state;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    // selections: [Table.SELECTION_ALL, Table.SELECTION_NONE],
  };

  return (
    <>
      <PageTitle>문서 목록</PageTitle>
      <ButtonWrap>
        <CreateButton type="primary">
          <Link to="/library/document/create">문서 만들기</Link>
        </CreateButton>
        <CreateButton type="default">문서 다운로드</CreateButton>
      </ButtonWrap>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        bordered
      />
    </>
  );
};

export default DocumentList;

const ButtonWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const CreateButton = styled(Button)`
  font-size: 12px;
  & + & {
    margin-left: 10px;
  }
`;

const ModifyButton = styled(Button)`
  width: 48px;
  height: 26px;
  font-size: 12px;
  padding: 0;
`;
