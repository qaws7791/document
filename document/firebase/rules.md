# Firebase Storage rule

파일을 업로드하고 업로드된 파일은 업로드한 사용자와 파일을 구매한 사용자만 <u>**Read **권한을 가지도록 제한****</u>

### 업로더인지 확인하는 로직

```javascript
resource.metadata['owner'] == request.auth.uid
```



### 구매자인지 확인하는 로직

```javascript
firestore.exists(/databases/(default)/documents/orders/$(request.auth.uid +"-"+ productId))
```



### Rule

```javascript
rules_version = '2';

service firebase.storage {
  match /b/{bucket}/o {

     match /artworks/{productId}/{imageId} {
    	allow read: if request.auth != null 
    	&& (resource.metadata['owner'] == request.auth.uid ||  				firestore.exists(/databases/(default)/documents/orders/$(request.auth.uid +"-"+ productId)));
      allow write: if request.auth != null;
    }
    
  }
}
```

