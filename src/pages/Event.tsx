import React, {FC, useEffect, useState} from "react";
import {EventCalendar} from "../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import {EventForm} from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


export const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const {fetchGuests} = useActions()
  const {guests} = useTypedSelector(state => state.event)

  useEffect(()=>{
    fetchGuests()
  },[])

  return (
    <Layout>
      <EventCalendar events={[]}/>
      <Row justify="center">
        <Button onClick={() => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal
        visible={modalVisible}
        title={"Добавить событие"}
        footer={null}
        onCancel={()=> setModalVisible(false)}
      >
        <EventForm guests={guests}/>
      </Modal>
    </Layout>
  )
}