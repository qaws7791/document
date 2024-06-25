# ALB를 사용하여 HTTPS 연결

## 다이어 그램

![https diagram](assets/Untitled.png)

## 1. 도메인 구매

원하는 곳에서 도메인을 구매하세요. 고대디, route53, cloudflare, 가비아 등

<img src="assets/Untitled 1.png" alt="route 53" style="zoom:50%;" />

## 2.Route53에서 호스 영역 등록

![Untitled 2](assets/Untitled 2.png)



## 3. 네임 서버 확인 후 도메인 구매처에 등록

❗마지막에 .(dot)은 제외하고 등록 org. -> org

![Untitled 3](assets/Untitled 3.png)



## 4. ACM에서 인증서 발급

![Untitled 4](assets/Untitled 4.png)

![Untitled 5](assets/Untitled 5.png)

![Untitled 6](assets/Untitled 6.png)



## 5. Route53 도메인과 연결

인증서 상세 페이지에서 Route53과 연결

![Untitled 7](assets/Untitled 7.png)

→ Route53의 도메인에 CNAME 레코드가 생성됨

![Untitled 8](assets/Untitled 8.png)



## 6. 보안 설정

EC2 → 보안 그룹 → 인바운드 규칙으로 이

80 포트 (HTTP) 활성화

443 포트(HTTPS) 활성

![Untitled 9](assets/Untitled 9.png)

## 7. 로드 밸런싱에서 대상 그룹(target group) 생성

대상 유형 선택 → 인스턴스

포트 → HTTP 80

상태 검사 → 상태를 확인하는 api 주소

![fwe](assets/fwe.jpg)



사용하는 인스턴스를 80포트로 선택하고 생성

![Untitled 10](assets/Untitled 10.png)



## 8. 로드 밸런싱 생성

- 로드 밸런서 유형 → **ALB(Application Load Balancer)**
- 네트워크 매핑은 최소 2개 이상의 가용 영역을 선택 → 인스턴스가 위치한 가용 영역 1개 + 나머지 1 개

![Untitled 11](assets/Untitled 11.png)

![Untitled 12](assets/Untitled 12.png)



## 9. 리스너 설정

HTTPS:443 → 대상 그룹으로 전달

HTTP:80 → HTTPS로 리디렉션

![Untitled 13](assets/Untitled 13.png)



## 10. A 레코드 생성(또는 변경)

![Untitled 14](assets/Untitled 14.png)