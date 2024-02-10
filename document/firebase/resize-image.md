임시 디렉터리에 저장된 이미지의 200x200 썸네일을 만든 후 다시 Cloud Storage에 업로드하는 방법

https://firebase.google.com/docs/functions/gcp-storage-events?hl=ko&gen=2nd

`JPEG`, `PNG`, `WebP`, `GIF` `AVIF`, `TIFF` 형식을 지원하는 확장 

https://extensions.dev/extensions/firebase/storage-resize-images 



이미지 직접 불러왔을 때

![image-20240201023030821](assets/image-20240201023030821.png)

![image-20240201023446151](assets/image-20240201023446151.png)





```javascript
response.setHeader("Cache-Control", "public, max-age=31536000");
```



캐싱 Miss

![image-20240201023038319](assets/image-20240201023038319.png)

![image-20240201023100185](assets/image-20240201023100185.png)

캐싱 Hit

![image-20240201023149420](assets/image-20240201023149420.png)

![image-20240201023302903](assets/image-20240201023302903.png)
