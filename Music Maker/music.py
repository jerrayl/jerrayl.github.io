from time import sleep
import vlc
from random import randint, shuffle

a = vlc.MediaPlayer("a.wav")
bf = vlc.MediaPlayer("bf.wav")
b = vlc.MediaPlayer("b.wav")
c = vlc.MediaPlayer("c.wav")
cs = vlc.MediaPlayer("cs.wav")
d = vlc.MediaPlayer("d.wav")
ef = vlc.MediaPlayer("ef.wav")
e = vlc.MediaPlayer("e.wav")
f = vlc.MediaPlayer("f.wav")
fs = vlc.MediaPlayer("fs.wav")
g = vlc.MediaPlayer("g.wav")
gs = vlc.MediaPlayer("gs.wav")

mp3 = [a,bf,b,c,cs,d,ef,e,f,fs,g,gs]

Cmaj = [c,d,e,f,g,a,b]
Dmaj = [d,e,fs,g,a,b,cs]
Emaj = [e,fs,gs,a,b,cs,ef]
Fmaj = [f,g,a,bf,c,d,e]
Gmaj = [g,a,b,c,d,e,fs]
Amaj = [a,b,cs,d,e,fs,gs]
Bmaj = [b,cs,ef,e,fs,gs,bf]
Csmaj = [cs,ef,f,fs,gs,bf,c]
Dsmaj = [ef,f,g,gs,bf,c,d]
Fsmaj = [fs,gs,bf,b,cs,ef,f]
Gsmaj = [gs,bf,c,cs,ef,f,g]
Asmaj = [bf,c,d,cs,f,g,a]

majors = [Cmaj,Dmaj,Emaj,Fmaj,Gmaj,Amaj,Bmaj,Csmaj,Dsmaj,Fsmaj,Gsmaj,Asmaj]

def get_notes(curr):
    if not curr:
        return [mp3[randint(0,6)]]
    else:
        curr = curr[0]
        temp = []
        shuffle(majors)
        for major in majors:
            if (curr in major) and (randint(1,2**(len(temp)+1))==1):
                temp.append(major[randint(0,6)])
        return temp
        
def get_rest():
    rest = [0.5,1,2,4,8,2,4]
    temp = []
    while sum([1/i for i in temp]) < 3:
        temp.append(rest[randint(0,6)])        
    if (temp.count(16)/2 + temp.count(8))%2 != 0 and 8 in temp:
        if randint(1,10)<5:
            temp.insert(temp.index(8),8)
        else:
            temp.insert(randint(0,len(temp)-1),8)
    if (temp.count(16)/4 + temp.count(8)/2 + temp.count(4))%2 != 0 and 4 in temp:
        if randint(1,10)<5:
            temp.insert(temp.index(4),4)
        else:
            temp.insert(randint(0,len(temp)-1),4)
    if (temp.count(16)/8 + temp.count(8)/4 + temp.count(4)/2 + temp.count(2))%2 != 0 and 2 in temp:
        if randint(1,10)<5:
            temp.insert(temp.index(2),2)
        else:
            temp.insert(randint(0,len(temp)-1),2)
    return temp
    
notes, rest = None, None   
while True:
    rest = get_rest()
    for i in rest:
        notes = get_notes(notes)
        for note in notes:
            note.play()
        sleep(1/i)
        for note in notes:
            note.stop()
    


