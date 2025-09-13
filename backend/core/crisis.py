
from typing import Optional


CRISIS_KEYWORDS = [
    "going to murder someone",
    "going to commit suicide",
    "i feel like to kill someone",
    "i'm going to rape someone",
    "i'm going to do something really bad",
    "i want to attack someone.",
    "suicide",
    "can't take it anymore",
    "going to do something bad"
]

def check_crisis(user_text: str) -> dict:
    """
    Check if the given text contains crisis keywords.
    Returns a dict with crisis flag and optional banner info.
    """

    text_lower = user_text.lower().strip()

    for keyword in CRISIS_KEYWORDS:
        if keyword in text_lower:
            return {
                "crisis": True,
                "banner": {
                    "message": "It sounds like you might be going through a really difficult time. You're not alone.",
                    "helpline": {
                        "india": "Call 9152987821 (Vandrevala Foundation Helpline)",
                        "international": "Find your local helpline at https://findahelpline.com",
                    },
                },
            }


    return {
        "crisis": False,
        "banner": None,
    }



