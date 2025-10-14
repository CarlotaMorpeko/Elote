class palindrome:

    def __init__(self, phrase):
        self.phrase = phrase

        def is_palindrome(self) -> bool:
            p = self.phrase
            #si es palindromo retorna True y si no False
            p = p.replace(" ", "").lower()
            palindrome = p[::-1]

            if p == palindrome:
                return True
            else:
                return False