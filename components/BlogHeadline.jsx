import { Row, Col } from "antd";

export default function BlogHeadline() {
  return (
    <Row align="middle" style={{ height: 400, textAlign: "center" }}>
      <Col span={24}>
        <h1 style={{ fontSize: 70, fontWeight: "bold" }}>Yujin&apos;s Blog</h1>
        <p style={{ fontSize: 24 }}>
          이건 비밀이야 아무에게도 고백하지 않았던 이야기를 들려주면 큰 눈으로
          너는 묻지 How wow wow Whatever 나 실은 말이야 저기 아득한 미래로부터
          날아왔어 쏟아질 듯이 빼곡한 별들 사이를 지나 Fly fly fly 있지 그곳도
          사실 바보들투성이야 아니 매우 반짝이는 건 오히려 Now now now 이 하루
          이 지금 우리 눈부셔 아름다워 이 불꽃놀이는 끝나지 않을 거야 Ooh
        </p>
      </Col>
    </Row>
  );
}
