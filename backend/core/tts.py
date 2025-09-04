import os
from sarvamai import SarvamAI
from dotenv import load_dotenv

load_dotenv()
SARVAM_KEY = os.getenv("SARVAM_API_KEY")

if not SARVAM_KEY:
    raise ValueError("SARVAM_API_KEY not found in environment!")


sarvam_client = SarvamAI(api_subscription_key=SARVAM_KEY)


def synthesize_speech(text: str) -> str | None:
    """
    Convert text → speech using SarvamAI.
    Returns base64-encoded audio (string), or None if failed.
    """
    try:
        tts_response = sarvam_client.text_to_speech.convert(
            text=text,
            target_language_code="en-IN",
            speaker="karun",
            pitch=0,
            pace=1,
            loudness=1,
            speech_sample_rate=22050,
            enable_preprocessing=False,
            model="bulbul:v2"
        )
        return tts_response.audios[0]  
    except Exception as e:
        print(f"[TTS] Error: {e}")
        return None