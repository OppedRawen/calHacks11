async function fetchAccessToken() {
    const response = await fetch('https://api.hume.ai/v0/auth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`p8T3zoeoifxZ2bPDH8PaW1qzPBdOjMEJ7gjbAtmBiHY79hY9:dDiKfaMxo1BpAAr84kzREU9GphTMN8I1gSttif95LdZfaFUpkqBPfijbY7Le63Fw`)}`,
      },
      body: JSON.stringify({ grant_type: 'client_credentials' }),
    });
    const data = await response.json();
    return data.access_token;
  }
  