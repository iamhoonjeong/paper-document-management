import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';

import PageTitle from '../../components/PageTitle';

const DocumentPages = () => {
  const columns = [
    {
      title: '페이지 ID',
      dataIndex: 'documentId',
    },
    {
      title: '페이지 명',
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
      title: '',
      dataIndex: 'documentModify',
      width: '80px',
    },
  ];
  const data: any = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      documentId: 100000 + i,
      documentName: `문서 ${i}`,
      createDate: `2021-11-11 14:43:15`,
      modifiedDate: `2021-11-11 14:43:15`,
      documentModify: (
        <ModifyButton type="ghost">
          <Link to="/library/document/page/create">수정</Link>
        </ModifyButton>
      ),
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
      <PageTitle>페이지 목록</PageTitle>
      <ButtonWrap>
        <StyledButton type="primary">
          <Link to="/library/document/page/create">페이지 만들기</Link>
        </StyledButton>
        <StyledButton type="default">페이지 다운로드</StyledButton>
        <StyledButton danger>삭제</StyledButton>
      </ButtonWrap>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered />
    </>
  );
};

export default DocumentPages;

const ButtonWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const StyledButton = styled(Button)`
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
