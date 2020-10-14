Import serial

from firebase import

FBBConn = firebase.FirebaseApplication(   )

ser=serial.serial()
ser.baudrate = 115200
ser.port = "COM4"
ser.open()

while true
data=str(ser.readline)()
temp = init(data[2:4])
print temp
ser.close