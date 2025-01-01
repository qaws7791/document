# use lambda with apigateway



API gateway REST API 만들기

url:https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/services-apigateway-tutorial.html

1. **버킷** 생성
2. 원본 버킷에 테스트를 위한 이미지 업로드
3. s3와 cloudwatch 사용을 위한 **권한 정책** 생성
4. 해당 정책을 사용하는 **실행 역할** 생성
5. 해당 실행 역할을 가지는 **Lambda 함수** 생성
6. S3 트리거 추가
7. 테스트 이벤트 생성 및 테스트



## 권한 정책 생성

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1428341300017",
      "Action": [
        "dynamodb:DeleteItem",
        "dynamodb:GetItem",
        "dynamodb:PutItem",
        "dynamodb:Query",
        "dynamodb:Scan",
        "dynamodb:UpdateItem"
      ],
      "Effect": "Allow",
      "Resource": "*"
    },
    {
      "Sid": "",
      "Resource": "*",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Effect": "Allow"
    }
  ]
}
```

![image-20240117035431756](assets/image-20240117035431756.png)



## 실행 역할 생성

![image-20240117035553338](assets/image-20240117035553338.png)

![image-20240117035613887](assets/image-20240117035613887.png)



![image-20240117035731564](assets/image-20240117035731564.png)



## 함수 생성

```javascript
console.log('Loading function')

import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  UpdateCommand,
  DeleteCommand,
} from '@aws-sdk/lib-dynamodb'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

const ddbClient = new DynamoDBClient({ region: 'ap-northeast-2' })
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient)

// Define the name of the DDB table to perform the CRUD operations on
const tablename = 'lambda-apigateway'

/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of 'create,' 'read,' 'update,' 'delete,' or 'echo'
 *   - payload: a JSON object containing the parameters for the table item
 *              to perform the operation on
 */
export const handler = async (event, context) => {
  const operation = event.operation

  if (operation == 'echo') {
    return event.payload
  } else {
    event.payload.TableName = tablename

    switch (operation) {
      case 'create':
        await ddbDocClient.send(new PutCommand(event.payload))
        break
      case 'read':
        var table_item = await ddbDocClient.send(new GetCommand(event.payload))
        console.log(table_item)
        break
      case 'update':
        await ddbDocClient.send(new UpdateCommand(event.payload))
        break
      case 'delete':
        await ddbDocClient.send(new DeleteCommand(event.payload))
        break
      default:
        return 'Unknown operation: ${operation}'
    }
  }
}

```

![image-20240117035952162](assets/image-20240117035952162.png)

zip 파일로 압축



## 함수 생성

기존의 역할을 사용하여 Lambda 함수 생성

![image-20240117040643653](assets/image-20240117040643653.png)

zip 파일 업로드 또는 편집기에 코드 붙여넣기

![image-20240117040719259](assets/image-20240117040719259.png)

## Lamdba 함수 테스트

![image-20240117040818953](assets/image-20240117040818953.png)

## ![image-20240117040845917](assets/image-20240117040845917.png)



## REST API 생성

![image-20240117041043040](assets/image-20240117041043040.png)



## REST API 리소스 생성

API 리소스 페이지에서 `리소스 생성`을 눌러 시작

![image-20240117041245005](assets/image-20240117041245005.png)



## HTTP POST 메서드 생성

![image-20240117041526415](assets/image-20240117041526415.png)

기존에 만든`LambdaFunctionOverHttps`를 선택하고 메서드 생성

![image-20240117041702526](assets/image-20240117041702526.png)



## DynamoDB 테이블 생성

파티션 키에서 id를 문자열 타입으로 지정하고 생성

![image-20240117041935693](assets/image-20240117041935693.png)



## API 테스트

![image-20240117042328908](assets/image-20240117042328908.png)

200 응답이 오는 확인.

테이블에서 항목이 제대로 생성되었는지 확인

![image-20240117042427937](assets/image-20240117042427937.png)



## API 배포

리소스 페이지에서 API를 배포

![image-20240117042644455](assets/image-20240117042644455.png)

배포된 URL 확인

![image-20240117043306821](assets/image-20240117043306821.png)

## Curl을 사용하여 HTTP 요청하여 함수 호출

### 항목 생성하기

```bash
curl https://f56h5tbp4g.execute-api.us-east-2.amazonaws.com/test/DynamoDBManager -d '{"operation": "create", "payload": {"Item": {"id": "5678EFGH", "number": 15}}}'
```

![image-20240117043412018](assets/image-20240117043412018.png)

테이블에서 추가된 항목을 확인

![image-20240117043513294](assets/image-20240117043513294.png)

### 항목 삭제하기

```bash
curl https://f56h5tbp4g.execute-api.us-east-2.amazonaws.com/test/DynamoDBManager -d '{"operation": "delete", "payload": {"Key": {"id": "5678EFGH"}}}'
```

![image-20240117043724903](assets/image-20240117043724903.png)

테이블에서 항목이 제대로 삭제되었는지 확인

![image-20240117043741922](assets/image-20240117043741922.png)