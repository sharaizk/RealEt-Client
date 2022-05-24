import React,{useState} from 'react'
import {ManagePortfolioContainer,ScreenTitle,AddPortfolioBtn} from './PortfolioElements'
import { Divider } from 'antd'
import { MdAdd } from 'react-icons/md'
import { Modal,Table } from 'antd'
import AddPortfolio from 'Components/LayoutComponents/Forms/AddPortfolio'
import { portfolioColumn } from 'helpers/Dashboard'
import { useQuery } from 'react-query'
import server from '../../Axios'
import { getToken } from 'Redux/localstorage'
import { useSelector } from 'react-redux'
const ManagePortfolio = () => {
  const [adPortfolio, setAdPortfolio] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const limit = 5;
  const {userId}=useSelector(state=>state.auth)
  
  const { data: portfolioData, isLoading } = useQuery(["Portfolio",userId,pageNumber],async () => {
    const portfolioResponse = await server.get("/portfolio/myPortfolio", {
      headers: {
        "Authorization":`Bearer ${getToken()}`
      },
      params: {
        page: pageNumber,
        limit:limit
      }
    })
    return portfolioResponse
  })
  return (
    <ManagePortfolioContainer>
      <Modal
        onCancel={() => setAdPortfolio(false)}
        footer={null}
        centered
        visible={adPortfolio}
        title="Add Portfolio"
      >
        <AddPortfolio setModal={setAdPortfolio} />
      </Modal>
      <ScreenTitle>My Portfolio</ScreenTitle>
      <Divider />
      <AddPortfolioBtn onClick={()=>setAdPortfolio(true)}>
        <MdAdd />
        Add Portfolio</AddPortfolioBtn>
        <Table
        loading={isLoading}
        columns={portfolioColumn}
        dataSource={portfolioData?.data.data}
        key={portfolioData?.data?.data._id}
        pagination={{
          defaultCurrent: 1,
          total: Math.ceil(portfolioData?.count/limit) || 1,
          current: pageNumber,
          pageSize: limit,
          defaultPageSize: limit,
          pageSizeOptions: [],
          onChange:(val)=>setPageNumber(val)
        }}
      />
    </ManagePortfolioContainer>
  )
}

export default ManagePortfolio