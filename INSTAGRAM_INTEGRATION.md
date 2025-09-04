# Instagram Integration Guide for Velka Koffie Website

## Overview
This guide explains how to integrate real Instagram photos into your coffee shop website.

## Option 1: Instagram Basic Display API (Recommended)

### Step 1: Create Instagram App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app and select "Consumer" type
3. Add "Instagram Basic Display" product to your app
4. Configure Instagram Basic Display settings

### Step 2: Get Access Token
1. Generate a long-lived access token
2. Store it securely (use environment variables)

### Step 3: Implement API Integration
Replace the fallback images in `InstagramFeed.tsx` with real API calls:

```typescript
const fetchInstagramPosts = async () => {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp&access_token=${ACCESS_TOKEN}`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    return fallbackImages;
  }
};
```

## Option 2: Third-Party Widgets (Easier)

### SnapWidget
1. Go to [SnapWidget](https://snapwidget.com/)
2. Create account and connect Instagram
3. Customize widget appearance
4. Copy embed code and add to your website

### LightWidget
1. Visit [LightWidget](https://lightwidget.com/)
2. Connect your Instagram account
3. Customize the feed appearance
4. Get the embed code

## Option 3: Manual Instagram Embeds

### For Individual Posts
1. Go to Instagram post
2. Click three dots → "Embed"
3. Copy the embed code
4. Add to your HTML

### For Profile Feed
1. Use Instagram's native embed option
2. Go to profile → Settings → Embed
3. Copy and paste the code

## Current Implementation
The website currently uses fallback images but is structured to easily integrate real Instagram data. The `InstagramFeed.tsx` component is ready for API integration.

## Security Notes
- Never expose access tokens in client-side code
- Use environment variables for sensitive data
- Consider implementing server-side API calls for production
