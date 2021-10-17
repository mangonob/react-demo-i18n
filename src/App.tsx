import { Button, Input, Space, Image } from "antd";
import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Styled = styled.div`
  padding-top: 60px;

  & > .ant-space {
    .ant-space-item input {
      width: 240px;
    }
  }
`;

function App() {
  const { t } = useTranslation();

  return (
    <Styled>
      <Space direction="vertical" align="end">
        <Input placeholder={t("user.username_placeholder")} />
        <Input placeholder={t("user.password_placeholder")} />
        <Space align="center">
          <Image src={t("user.image_url")} width={28} height={28} />
          <Button>{t("user.signup")}</Button>
          <Button type="primary">{t("user.login")}</Button>
        </Space>
      </Space>
    </Styled>
  );
}

export default App;
