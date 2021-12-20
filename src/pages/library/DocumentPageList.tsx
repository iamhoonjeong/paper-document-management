import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

import PageTitle from '../../components/PageTitle';

const DocumentPages = () => {
  const onPageUp = useCallback(() => {
    console.log('page up');
  }, []);
  const onPageDown = useCallback(() => {
    console.log('page down');
  }, []);
  const columns = [
    {
      title: '번호',
      dataIndex: 'documentPageNumber',
    },
    {
      title: '이름',
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
      title: '아이디',
      dataIndex: 'documentId',
    },
    {
      title: '순서 변경',
      dataIndex: 'pageNumberEdit',
      width: '',
    },
    {
      title: '수정',
      dataIndex: 'documentEdit',
      width: '',
    },
  ];
  const data: any = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      documentPageNumber: i + 1,
      documentName: `문서 ${i}`,
      documentId: 1000 + i,
      createDate: `2021-11-11 14:43:15`,
      modifiedDate: `2021-11-11 14:43:15`,
      pageNumberEdit: (
        <>
          <EditButton type="ghost" onClick={onPageUp}>
            <ArrowUpOutlined />
          </EditButton>
          <EditButton type="ghost" onClick={onPageDown}>
            <ArrowDownOutlined />
          </EditButton>
        </>
      ),
      documentEdit: (
        <EditButton type="ghost">
          <Link to="/library/document/page/create">수정</Link>
        </EditButton>
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

const EditButton = styled(Button)`
  width: 48px;
  height: 26px;
  font-size: 12px;
  padding: 0;
  & + & {
    margin-left: 8px;
  }
`;
