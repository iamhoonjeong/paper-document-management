import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Table, Input, Space, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import PageTitle from '../../components/PageTitle';

const DocumentList = () => {
  // modal
  const [modal, setModal] = useState(false);
  const onChangeModal = () => {
    setModal((prev) => !prev);
  };

  // search value
  const [searchValue, setSearchValue] = useState('');

  // search function
  const columnSearch = (dataIndex: any, dataKey: any) => ({
    filterDropdown: () => (
      <div style={{ padding: 8 }}>
        <Input
          name={dataKey}
          placeholder={`${dataIndex} 검색`}
          style={{ marginBottom: 8, display: 'block' }}
          value={searchValue}
          onChange={(e: any) => {
            setSearchValue(e.target.value);
          }}
          autoComplete="off"
        />
        <Space>
          <Button
            className="search-button"
            type="primary"
            size="small"
            style={{ width: 90 }}
            onClick={() => {
              const filteredData = data.filter((entry: any): any =>
                String(entry[dataKey]).includes(String(searchValue)),
              );
              setDataSource(filteredData);
            }}
          >
            검색
          </Button>
          <Button
            size="small"
            style={{ width: 90 }}
            onClick={() => {
              setSearchValue('');
              setDataSource(data);
            }}
          >
            재설정
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilterDropdownVisibleChange: (visible: any) => {
      if (!visible) {
      }
    },
  });

  const data: any = [];
  for (let i = 0; i < 500; i++) {
    data.push({
      templateSequence: i + 1,
      templateId: i + 1,
      templateTitle: `템플릿 ${i}`,
      pageNumber: i + 1,
      createDate: `2021-11-11 14:43:15`,
      lastModifiedDate: `2021-11-11 14:43:15`,
      createPage: (
        <ModifyButton type="ghost">
          <Link to="/papyrus/template/pages">페이지 보기</Link>
        </ModifyButton>
      ),
    });
  }
  const columns = [
    {
      title: 'seq',
      dataIndex: 'templateSequence',
      key: 'templateSequence',
      ...columnSearch('seq', 'templateSequence'),
    },
    {
      title: '템플릿 ID',
      dataIndex: 'templateId',
      key: 'templateId',
    },
    {
      title: '템플릿 타이틀',
      dataIndex: 'templateTitle',
      key: 'templateTitle',
      ...columnSearch('템플릿 타이틀', 'templateTitle'),
    },
    {
      title: '페이지 수',
      dataIndex: 'pageNumber',
      key: 'pageNumber',
    },
    {
      title: '생성일',
      dataIndex: 'createDate',
      key: 'createDate',
    },
    {
      title: '최종 수정일',
      dataIndex: 'lastModifiedDate',
      key: 'lastModifiedDate',
    },
    {
      title: 'Action',
      dataIndex: 'createPage',
      key: 'createPage',
    },
  ];
  const [dataSource, setDataSource] = useState(data);

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

  const reload = () => {
    window.location.reload();
  };
  return (
    <>
      {modal && (
        <Modal>
          <CreateTemplateWrap>
            <PageTitle>템플릿 생성</PageTitle>
            <CreateTemplateInputWrap>
              <CreateTemplateTitle>템플릿 타이틀</CreateTemplateTitle>
              <CreateTemplateInput />
            </CreateTemplateInputWrap>
            <CreateTemplateInputWrap>
              <CreateTemplateTitle>템플릿 ID</CreateTemplateTitle>
              <CreateTemplateInput />
              <CheckIdButton type="default" onClick={() => message.info('중복체크 메세지')}>
                템플릿 ID 중복체크
              </CheckIdButton>
            </CreateTemplateInputWrap>
            <CreateTemplateButtonWrap>
              <StyledButton type="primary" onClick={onChangeModal}>
                생성
              </StyledButton>
              <StyledButton type="default" onClick={onChangeModal}>
                취소
              </StyledButton>
            </CreateTemplateButtonWrap>
          </CreateTemplateWrap>
        </Modal>
      )}
      <PageTitle>템플릿</PageTitle>
      <ButtonWrap>
        <StyledButton type="primary" onClick={onChangeModal}>
          템플릿 생성
        </StyledButton>
        <StyledButton type="default" onClick={reload}>
          새로고침
        </StyledButton>
        <StyledButton danger>템플릿 삭제</StyledButton>
      </ButtonWrap>
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} bordered />
    </>
  );
};

export default DocumentList;

const ButtonWrap = styled.div`
  display: flex;
  margin: 20px 0;
`;

const StyledButton = styled(Button)<{ marginLeft?: boolean }>`
  font-size: 12px;
  & + & {
    margin-left: 10px;
  }
  ${(props) => (props.marginLeft ? 'margin-left: 10px;' : '')}
`;

const ModifyButton = styled(Button)`
  height: 26px;
  font-size: 12px;
  padding: 0 8px;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CreateTemplateWrap = styled.div`
  width: 360px;
  background-color: white;
  padding: 20px 30px;
  overflow: hidden;
`;

const CreateTemplateInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CreateTemplateTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  white-space: nowrap;
  min-width: 100px;
`;

const CreateTemplateInput = styled(Input)`
  font-size: 12px;
  margin-top: 8px;
  height: 36px;
  &::placeholder {
    font-size: 12px;
  }
`;

const CreateTemplateButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const CheckIdButton = styled(Button)`
  font-size: 12px;
  margin-top: 8px;
  width: fit-content;
`;
