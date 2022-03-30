import { Col, Row } from "antd";
import Link from "next/link";
import { CodeOutlined } from "@ant-design/icons";

export default function Header() {
  return (
    <Row align="middle" style={{ height: 64 }}>
      <Col span={24}>
        <Link href="/">
          <a>
            <div style={{ fontSize: 20, fontWeight: "bold" }}>
              <CodeOutlined /> Yujin&apos;s Blog
            </div>
          </a>
        </Link>
      </Col>
    </Row>
  );
}
