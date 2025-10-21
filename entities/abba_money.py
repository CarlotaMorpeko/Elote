class Conversor:

    
    def __init__(self, number):
        self.number = number

    def is_money(self) -> bool:
    
        p = float(self.number)*8.15
        return f"{p:.2f} ¥"