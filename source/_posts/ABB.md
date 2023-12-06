---
title: ABB
date: 2023-06-06 20:45:24
tags:
password: here
---

```
MODULE Module1
    
    CONST num offset_x:=600;
    CONST num offset_y_length:=-305;
    CONST num offset_y_width:=-205;
    CONST num offset_z:=130;
    CONST num lift:=300;
    
    PROC pick(robtarget point)
        MoveL Offs(point,0,0,lift),v7000,fine,tGripper\WObj:=wobj0;
        WaitDI DI0,1;
        MoveL point,v7000,fine,tGripper\WObj:=wobj0;
        WaitTime 0.5;
        Set DO0;
        MoveL Offs(point,0,0,lift),v7000,fine,tGripper\WObj:=wobj0;
    ENDPROC
    
    PROC place1(robtarget point, num i, num k)
        MoveL Offs(point,0,i*offset_y_width,lift+k*offset_z),v7000,fine,tGripper\WObj:=wobj0;
        MoveL Offs(point,0,i*offset_y_width,+k*offset_z),v7000,fine,tGripper\WObj:=wobj0;
        WaitTime 0.5;
        Reset DO0;
        MoveL Offs(point,0,i*offset_y_width,lift+k*offset_z),v7000,fine,tGripper\WObj:=wobj0;
    ENDPROC
    
    PROC place2(robtarget point, num i, num k)
        MoveL Offs(point,0,i*offset_y_length,lift+k*offset_z),v7000,fine,tGripper\WObj:=wobj0;
        MoveL Offs(point,0,i*offset_y_length,+k*offset_z),v7000,fine,tGripper\WObj:=wobj0;
        WaitTime 0.5;
        Reset DO0;
        MoveL Offs(point,0,i*offset_y_length,lift+k*offset_z),v7000,fine,tGripper\WObj:=wobj0;
    
    ENDPROC
    PROC main()
        
        MoveL Offs(zhua,0,0,lift),v7000,fine,tGripper\WObj:=wobj0;
        FOR k FROM 0 TO 9 DO
            FOR i FROM 0 TO 3 DO
                pick zhua;
                place1 fang,i,k;
            ENDFOR
            FOR j FROM 0 TO 2 DO
                pick zhua;
                place2 fang90,j,k;
            ENDFOR
        ENDFOR
    ENDPROC
    
	PROC Path_10()
        MoveL fang,v7000,fine,tGripper\WObj:=wobj0;
        MoveL zhua,v7000,fine,tGripper\WObj:=wobj0;
        MoveL fang90,v7000,fine,tGripper\WObj:=wobj0;

	ENDPROC
ENDMODULE

```