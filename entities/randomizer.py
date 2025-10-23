import random
class Randomizer:
    
    def __init__(self, number1, number2, number3):
        self.number1 = number1
        self.number2 = number2
        self.number3 = number3
        
    def is_jackpot(self) -> bool: 
        numero = random.randint(1, 100)
        num1 = self.number1
        num2 = self.number2
        num3 = self.number3
        ganador = numero
        if num1 == ganador:
            return True
        elif num2 == ganador:
            return True
        elif num3 == ganador:
            return True
        else:
            return False