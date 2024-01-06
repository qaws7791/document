# Connecting to GitHub via HTTPS

When using Github via the Coursera platform, it is required to authenticate using a Personal Access Token over HTTPS. A Personal Access Token is a special password that you use instead of your actual account password. When you're finished using the token, you can revoke it so that it can no longer be used. It is also possible to set an expiry time for the token. This helps to keep your account secure.

### Generate a Personal Access Token

We now need to set up our Personal Access Token.

**Step 1:** Log in to Github

**Step 2:** Click on the profile icon in the top right of the screen and select Settings.



![Click on settings. ](./Connecting to GitHub via HTTPS.assets/qBM9wZ2zQJeTPcGds_CXzA_82389fbb7ed140b78c68ea0807d9aae1_settings.png)

**Step 3:** On the Settings screen, on the left-hand side click Developer Settings.



![Click on Developers Settings. ](./Connecting to GitHub via HTTPS.assets/E8rQIJaSR22K0CCWkodtag_68403478224348cf85959d06166959e1_developer_settings.png)

**Step 4:** On the Developer Settings screen, click Personal Access Tokens and then click Generate Token.



![Click on Personal Access Token and then Generate Token. ](./Connecting to GitHub via HTTPS.assets/X3-fg00gQ1a_n4NNIKNWsA_1b9dcda68b8c43799ab2d620addd8ae1_personal_access_tokens.png)

**Step 5:** On the New Personal Access Token page, enter a token name and an expiry time. If you wish to manually revoke the token, set the expiry time to No Expiration.



![Enter token name and expiry time. ](./Connecting to GitHub via HTTPS.assets/qC-kPVy4QhqvpD1cuHIacw_66f2abdf46dd4d01a6d46446b87022e1_new_personal_access_token.png)

**Step 6:** Under scopes, select repo.



![Select repo. ](./Connecting to GitHub via HTTPS.assets/4Mc3BXnRSVuHNwV50Rlbmw_ff8b2d6be1ff417b853ca3eaaae3c8e1_new_personal_access_token_scopes.png)

**Step 7:** Scroll to the end of the page and click Generate token.



![Click on generate token. ](./Connecting to GitHub via HTTPS.assets/wB0cpA6eT1adHKQOnk9W-w_ab7172e3640748e4aa0d3e49f52254e1_generate_token.png)

**Step 8:** The token is now generated. Make sure to copy and keep note of the token as it will be hidden when you leave the page. This token can now be used when connecting to a repository over HTTPS.



![Copy and save the token. ](./Connecting to GitHub via HTTPS.assets/U9si9-WaQg6bIvflmhIOVQ_9a383fa1755d44728f2d290551151fe1_personal_access_tokens_done.png)

*Note: If you lose the token, you can delete the old token and create a new one.*

## Accessing Repositories

When accessing a repository and using HTTPS authentication, make sure to always use the HTTPS address of the repository.



![Use the HTTPS address of the repository. ](./Connecting to GitHub via HTTPS.assets/MQsqwt5uT3iLKsLebs94xg_ab750094df9449a98f1fbd71eea39ae1_clone_https.png)