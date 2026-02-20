// ===== EXERCISES =====
var EXERCISES = {
  flow: [
    { id:'f1', name:'Bear Crawls', muscles:'Full body, shoulders, core', sets:'30-40s', reps:'continuous', tips:'Stay low, opposite hand/foot move together. Keep hips level.', category:'flow', video:'https://www.youtube.com/watch?v=lMnksRNOzaw' },
    { id:'f2', name:'Crab Walks', muscles:'Triceps, glutes, core', sets:'30-40s', reps:'continuous', tips:'Hips high, fingers pointing back. Move smoothly.', category:'flow', video:'https://www.youtube.com/watch?v=ZodvhSMy6rk' },
    { id:'f3', name:'Frog Squats', muscles:'Hips, quads, glutes', sets:'30-40s', reps:'continuous', tips:'Deep squat position, hands touch ground, explosive up.', category:'flow', video:'https://www.youtube.com/watch?v=KtX0mh2NQos' },
    { id:'f4', name:'Scorpion Reaches', muscles:'Hip flexors, thoracic spine', sets:'30-40s', reps:'alternating', tips:'Face down, reach foot to opposite side. Control the rotation.', category:'flow', video:'https://www.youtube.com/watch?v=fEonF-SVkdk' },
    { id:'f5', name:'Ape Movements', muscles:'Hips, quads, shoulders', sets:'30-40s', reps:'continuous', tips:'Lateral shuffles in deep squat, hands touch ground between steps.', category:'flow', video:'https://www.youtube.com/watch?v=6qk4u7uwqls' },
    { id:'f6', name:'Beast to Crab Transitions', muscles:'Full body, coordination', sets:'30-40s', reps:'continuous', tips:'Flow from beast (belly down) to crab (belly up). Smooth rotation.', category:'flow', video:'https://www.youtube.com/watch?v=zgYEFbq913w' },
    { id:'f7', name:'Ground-to-Standing Flows', muscles:'Full body, mobility', sets:'30-40s', reps:'continuous', tips:'Find creative ways from ground to standing. No hands if possible.', category:'flow', video:'https://www.youtube.com/watch?v=MFZUpFg1fII' },
    { id:'f8', name:'Hip Circles / Openers', muscles:'Hip flexors, glutes', sets:'30-40s', reps:'each direction', tips:'Large controlled circles. Open hips fully on each rep.', category:'flow', video:'https://www.youtube.com/watch?v=9K9ISprFrIQ' },
  ],
  push: [
    { id:'p1', name:'Incline Dumbbell Press', muscles:'Upper chest, shoulders, triceps', sets:'3', reps:'10', rest:45, tips:'Go heavy, slightly arch lower back, lower to chest, forearms point to ceiling, fully extend.', category:'push', video:'https://www.youtube.com/watch?v=8fXfwG4ftaQ' },
    { id:'p2', name:'Flat Dumbbell Press', muscles:'Chest, shoulders, triceps', sets:'3', reps:'8-12', rest:45, tips:'Go heavy, slightly arch lower back, lower to chest, forearms straight, fully extend.', category:'push', video:'https://www.youtube.com/watch?v=o7TvO377OqA' },
    { id:'p3', name:'Dumbbell Flys', muscles:'Chest, front delts', sets:'3', reps:'12', rest:30, tips:'Wrist toward body, arms slightly bent, lower to just above chest, dumbbells touch at top.', category:'push', video:'https://www.youtube.com/watch?v=eozdVDA78K0' },
    { id:'p4', name:'Dumbbell Overhead Press', muscles:'Shoulders, triceps', sets:'3', reps:'10', rest:45, tips:'Start at shoulder height, press straight overhead, avoid arching back, lower with control.', category:'push', video:'https://www.youtube.com/watch?v=k6tzKisR3NY' },
    { id:'p5', name:'Overhead Tricep Extension', muscles:'Triceps', sets:'3', reps:'12', rest:30, tips:'Over head not on head, only move forearm, fully extend, pause at extension.', category:'push', video:'https://www.youtube.com/watch?v=-Vyt2QdsR7E' },
    { id:'p6', name:'Side Lateral Raises', muscles:'Side delts', sets:'3', reps:'15', rest:30, tips:'Arms at sides, raise to parallel, slight elbow bend, lower slowly.', category:'push', video:'https://www.youtube.com/watch?v=PzsMitRdI_8' },
    { id:'p7', name:'Rear Delt Raises', muscles:'Rear delts, upper back', sets:'3', reps:'15', rest:30, tips:'Hinge at hips, raise arms to sides until parallel, slight elbow bend, lower slowly.', category:'push', video:'https://www.youtube.com/watch?v=lPt0GqwaqEw' },
    { id:'p8', name:'Front Raises', muscles:'Front delts', sets:'3', reps:'12', rest:30, tips:'Hold in front of thighs, raise to shoulder height, slight elbow bend, lower slowly.', category:'push', video:'https://www.youtube.com/watch?v=h9xfpTrAvkE' },
  ],
  pull: [
    { id:'r1', name:'Incline Dumbbell Row', muscles:'Upper back, lats', sets:'3', reps:'10', rest:45, tips:'Start fully extended, pull toward hips not straight up, sweeping motion, hold at top.', category:'pull', video:'https://www.youtube.com/watch?v=tZUYS7X50so' },
    { id:'r2', name:'Single Arm Dumbbell Row', muscles:'Lats, rhomboids', sets:'3', reps:'10/side', rest:30, tips:'One arm/knee on bench, pull toward hips, sweeping motion, hold at top.', category:'pull', video:'https://www.youtube.com/watch?v=gfUg6qWohTk' },
    { id:'r3', name:'Rear Delt Raises', muscles:'Rear delts, upper back', sets:'3', reps:'12-15', rest:30, tips:'Hinge at hips, raise arms to sides until parallel, slight elbow bend, lower slowly.', category:'pull', video:'https://www.youtube.com/watch?v=lPt0GqwaqEw' },
    { id:'r4', name:'Dumbbell Shrugs', muscles:'Traps', sets:'3', reps:'10-12', rest:30, tips:'Hold at sides, shrug as high as possible, straight up/down not rolling, hold at top.', category:'pull', video:'https://www.youtube.com/watch?v=rFsSeClGnNA' },
    { id:'r5', name:'Bicep Curls', muscles:'Biceps', sets:'3', reps:'12', rest:30, tips:"Don't swing, only move forearms, squeeze at top, go slow.", category:'pull', video:'https://www.youtube.com/watch?v=iui51E31sX8' },
    { id:'r6', name:'Hammer Curls', muscles:'Biceps, brachialis', sets:'3', reps:'12', rest:30, tips:"Don't swing, only forearms, stable wrist, arms in front of body.", category:'pull', video:'https://www.youtube.com/watch?v=zC3nLlEvin4' },
  ],
  legs: [
    { id:'l1', name:'Bulgarian Split Squat', muscles:'Quads, glutes', sets:'3', reps:'10/leg', rest:45, tips:'One foot on bench behind, lower to 90°, stay upright, push through front heel.', category:'legs', video:'https://www.youtube.com/watch?v=9p5e2BSvoLs' },
    { id:'l2', name:'Goblet Squat', muscles:'Quads, glutes, core', sets:'3', reps:'12', rest:45, tips:'Hold dumbbell at chest, feet shoulder-width, squat to parallel, chest up, push through heels.', category:'legs', video:'https://www.youtube.com/watch?v=MeIiIdhvXT4' },
    { id:'l3', name:'Walking Lunges', muscles:'Quads, glutes, hamstrings', sets:'3', reps:'10/leg', rest:45, tips:'Hold at sides, step forward to 90°, push through front heel, torso upright.', category:'legs', video:'https://www.youtube.com/watch?v=L8fvypPrzzs' },
    { id:'l4', name:'Romanian Deadlift', muscles:'Hamstrings, glutes, lower back', sets:'3', reps:'10', rest:45, tips:'Hold in front, hinge hips, keep back straight, lower until hamstring stretch, drive through heels.', category:'legs', video:'https://www.youtube.com/watch?v=hQgFixeXdZo' },
    { id:'l5', name:'Sumo Squats', muscles:'Inner thighs, quads, glutes', sets:'3', reps:'12', rest:45, tips:'Wide stance, toes pointed out, hold DB at center. Squat deep, knees track toes.', category:'legs', video:'https://www.youtube.com/watch?v=c44X65gbyHQ' },
    { id:'l6', name:'Curtsy Lunges', muscles:'Glutes, inner thighs', sets:'3', reps:'10/leg', rest:45, tips:'Step one leg behind and across, lower into lunge. Targets glutes and inner thighs.', category:'legs', video:'https://www.youtube.com/watch?v=0f-njCiEIFM' },
  ],
  bodyweight: [
    { id:'bw1', name:'Push-ups (Wide)', muscles:'Chest, triceps, shoulders', sets:'3', reps:'max', rest:30, tips:'Hands wider than shoulders, full range, chest to floor.', category:'bodyweight', video:'https://www.youtube.com/watch?v=QwTW7DXBw5w' },
    { id:'bw2', name:'Diamond Push-ups', muscles:'Triceps, inner chest', sets:'3', reps:'max', rest:30, tips:'Hands together forming diamond, elbows close to body.', category:'bodyweight', video:'https://www.youtube.com/watch?v=PPTj-MW2tcs' },
    { id:'bw3', name:'Close Grip Push-ups', muscles:'Triceps, chest', sets:'3', reps:'max', rest:30, tips:'Hands shoulder-width, elbows back not out.', category:'bodyweight', video:'https://www.youtube.com/watch?v=2cdIRe5tcqI' },
    { id:'bw4', name:'Pull-ups', muscles:'Back, biceps', sets:'3', reps:'max', rest:45, tips:'Overhand grip, pull until chin over bar. Use band for assistance if needed.', category:'bodyweight', video:'https://www.youtube.com/watch?v=eGo4IYlbE5g' },
    { id:'bw5', name:'Mountain Climbers', muscles:'Core, cardio', sets:'45s', reps:'continuous', tips:'Plank position, drive knees to chest alternating, keep hips level.', category:'bodyweight', video:'https://www.youtube.com/watch?v=hZb6jTbCLeE' },
    { id:'bw6', name:'Burpees (PKD-safe)', muscles:'Full body cardio', sets:'45s', reps:'continuous', tips:'Squat down, step back to plank (no jump back), step forward, stand. Skip the push-up to reduce strain.', category:'bodyweight', video:'https://www.youtube.com/watch?v=gYiE_2BtSTg' },
    { id:'bw7', name:'High Knees', muscles:'Cardio, hip flexors', sets:'45s', reps:'continuous', tips:'Run in place, drive knees above hip height, pump arms.', category:'bodyweight', video:'https://www.youtube.com/watch?v=0X0Q8wKLEfo' },
    { id:'bw8', name:'Jump Squats', muscles:'Quads, glutes, cardio', sets:'45s', reps:'continuous', tips:'Bodyweight squat, explode up, land soft. ⚠️ PKD: skip if uncomfortable, sub regular squats.', category:'bodyweight', video:'https://www.youtube.com/watch?v=XOTO2qWRy9U' },
    { id:'bw9', name:'Renegade Rows', muscles:'Back, core, arms', sets:'3', reps:'8/side', rest:30, tips:'Plank position, row one DB at a time. Core tight, don\'t rotate hips.', category:'bodyweight', video:'https://www.youtube.com/watch?v=Ek5xHUVSsAM' },
    { id:'bw10', name:'Plank Hold', muscles:'Core, shoulders', sets:'1', reps:'60s hold', tips:'Forearms on ground, straight line head to heels. Squeeze core, breathe steadily.', category:'bodyweight', video:'https://www.youtube.com/watch?v=O83fmDwTYpg' },
    { id:'bw11', name:'Side Plank', muscles:'Obliques, core', sets:'1', reps:'30s/side', tips:'On one forearm, stack feet, hips high. 30s each side.', category:'bodyweight', video:'https://www.youtube.com/watch?v=N_s9em1xTqU' },
    { id:'bw12', name:'Pike Push-ups', muscles:'Shoulders, triceps', sets:'3', reps:'8', rest:30, tips:'Feet elevated or hips high in inverted V. Press head toward floor. Targets shoulders.', category:'bodyweight', video:'https://www.youtube.com/watch?v=_wYRaVHVr6g' },
    { id:'bw13', name:'Bench Dips', muscles:'Triceps, chest', sets:'3', reps:'max', rest:30, tips:'Hands on bench behind you, lower body by bending elbows to 90°. Extend back up.', category:'bodyweight', video:'https://www.youtube.com/watch?v=4ua3MzaU0QU' },
    { id:'bw14', name:'Commando Plank', muscles:'Core, shoulders, triceps', sets:'3', reps:'10', rest:30, tips:'Forearm plank, push up to hands one at a time, back down. Don\'t rock hips.', category:'bodyweight', video:'https://www.youtube.com/watch?v=SNgITB-biLk' },
    { id:'bw15', name:'Superman Hold', muscles:'Lower back, glutes', sets:'1', reps:'30s hold', tips:'Face down, lift arms and legs off floor. Hold 30s. Strengthens lower back.', category:'bodyweight', video:'https://www.youtube.com/watch?v=VD6ma6oe4ZA' },
    { id:'bw16', name:'Plank to Push-up', muscles:'Core, shoulders, triceps', sets:'3', reps:'10', rest:30, tips:'Start in forearm plank, push up to hands one at a time, lower back down.', category:'bodyweight', video:'https://www.youtube.com/watch?v=9PMGJqQnrGc' },
    { id:'bw17', name:'Squat Thrusts', muscles:'Full body, shoulders, cardio', sets:'20s', reps:'continuous', tips:'Hold light dumbbells or water bottles at shoulders. Squat down, thrust weights overhead as you stand. Continuous for 20s. ⚠️ PKD: use light weight, no jerky movements.', category:'bodyweight', video:'https://www.youtube.com/watch?v=F4511oTkNls' },
    { id:'bw18', name:'Jumping Jacks', muscles:'Full body cardio, calves', sets:'20s', reps:'continuous', tips:'Classic jumping jacks — jump feet out while raising arms overhead, jump back in. Keep a steady rhythm for 20s.', category:'bodyweight', video:'https://www.youtube.com/watch?v=c4DAnQ6DtF8' },
  ],
  compound: [
    { id:'c1', name:'Dumbbell Thrusters', muscles:'Quads, shoulders, full body', sets:'3', reps:'10', rest:30, tips:'Squat holding DBs at shoulders, explode up pressing overhead in one motion.', category:'compound', video:'https://www.youtube.com/watch?v=-rHJkjHUbmo' },
    { id:'c2', name:'DB Clean and Press', muscles:'Full body, shoulders', sets:'3', reps:'8', rest:30, tips:'Power clean DB from floor to shoulder, press overhead. One fluid motion.', category:'compound', video:'https://www.youtube.com/watch?v=sZ4XMWn8bAU' },
    { id:'c3', name:'DB Pullover', muscles:'Chest, lats', sets:'3', reps:'10', rest:30, tips:'Lying on floor/bench, hold DB over chest, lower behind head with straight arms, pull back over.', category:'compound', video:'https://www.youtube.com/watch?v=5YStMv6m2g8' },
  ],
  yoga: [
    { id:'y1', name:'Downward Dog', muscles:'Hamstrings, calves, shoulders', sets:'30-60s', reps:'hold', tips:'Inverted V shape, press heels toward floor, spread fingers wide. Hold 30-60s.', category:'yoga', video:'https://www.youtube.com/watch?v=j97SSGsnCAQ' },
    { id:'y2', name:'Warrior 1', muscles:'Hip flexors, quads, shoulders', sets:'30-60s', reps:'each side', tips:'Front knee over ankle, back foot 45°, arms overhead. Square hips forward.', category:'yoga', video:'https://www.youtube.com/watch?v=5rT--p_cLOc' },
    { id:'y3', name:'Warrior 2', muscles:'Hips, quads, shoulders', sets:'30-60s', reps:'each side', tips:'Front knee over ankle, arms extended, gaze over front hand. Open hips to side.', category:'yoga', video:'https://www.youtube.com/watch?v=4Ejz7IgODlU' },
    { id:'y4', name:'Triangle Pose', muscles:'Hamstrings, obliques, hips', sets:'30-60s', reps:'each side', tips:'Front leg straight, reach down to shin/floor, top arm to sky. Don\'t collapse chest.', category:'yoga', video:'https://www.youtube.com/watch?v=upFYlxZHif0' },
    { id:'y5', name:'Chair Pose', muscles:'Quads, glutes, core', sets:'30-60s', reps:'hold', tips:'Feet together, sit back like sitting in chair, arms overhead. Weight in heels.', category:'yoga', video:'https://www.youtube.com/watch?v=_GIKyB_n1TA' },
  ],
  warmup: [
    { id:'wu1', name:'Jog in Place', muscles:'Cardio, calves, quads', sets:'60s', reps:'continuous', tips:'Light jog, stay on balls of feet, pump arms naturally. Build pace gradually.', category:'warmup', video:'https://www.youtube.com/watch?v=xmkYBO85leM' },
    { id:'wu2', name:'Squats to Calf Raises', muscles:'Quads, glutes, calves', sets:'2', reps:'12', tips:'Bodyweight squat, at the top rise onto toes for calf raise. Control both phases.', category:'warmup', video:'https://www.youtube.com/watch?v=YaXPRqUwItQ' },
    { id:'wu3', name:'Plank to Mountain Climbers', muscles:'Core, shoulders, hip flexors', sets:'2', reps:'30s', tips:'Hold plank 10s, then 20s of mountain climbers. Drive knees to chest, keep hips level.', category:'warmup', video:'https://www.youtube.com/watch?v=nmwgirgXLYM' },
    { id:'wu4', name:'Arm Circles + Shoulder Rolls', muscles:'Shoulders, rotator cuff', sets:'30s', reps:'each direction', tips:'Small circles → big circles. 15s forward, 15s backward. Then 10 shoulder rolls.', category:'warmup', video:'https://www.youtube.com/watch?v=140RTNMciH8' },
    { id:'wu5', name:'High Knees', muscles:'Hip flexors, quads, cardio', sets:'45s', reps:'continuous', tips:'Drive knees above hip height. Stay on toes, pump arms. Keep core tight.', category:'warmup', video:'https://www.youtube.com/watch?v=tx5rgpDAJRI' },
    { id:'wu6', name:'Leg Swings (Front/Side)', muscles:'Hip flexors, hamstrings, adductors', sets:'20/leg', reps:'each direction', tips:'Hold wall for balance. Swing forward/back 20x, then side-to-side 20x. Controlled, increasing range.', category:'warmup', video:'https://www.youtube.com/watch?v=naW8u72lOzI' },
    { id:'wu7', name:'Jumping Jacks', muscles:'Full body, cardio', sets:'45s', reps:'continuous', tips:'Full range — arms overhead, feet wide. Land softly. Steady pace.', category:'warmup', video:'https://www.youtube.com/watch?v=c4DAnQ6DtF8' },
    { id:'wu8', name:'Bodyweight Good Mornings', muscles:'Hamstrings, lower back, glutes', sets:'2', reps:'12', tips:'Hands behind head, hinge at hips, flat back. Feel hamstring stretch, squeeze glutes to stand.', category:'warmup', video:'https://www.youtube.com/watch?v=vKPGe8zb2S4' },
    { id:'wu9', name:'Inchworms', muscles:'Hamstrings, core, shoulders', sets:'2', reps:'6', tips:'Stand, fold forward, walk hands to plank, walk feet to hands, stand. Legs as straight as possible.', category:'warmup', video:'https://www.youtube.com/watch?v=aFkv2m9FTGs' },
    { id:'wu10', name:'Lateral Lunges', muscles:'Adductors, quads, glutes', sets:'2', reps:'8/side', tips:'Wide step to side, sit hips back, keep other leg straight. Push back to center. Alternate sides.', category:'warmup', video:'https://www.youtube.com/watch?v=gwWv7aPcD88' },
    { id:'wu11', name:'Butt Kicks', muscles:'Hamstrings, quads, cardio', sets:'45s', reps:'continuous', tips:'Jog in place, kick heels to glutes. Quick tempo, light on your feet.', category:'warmup', video:'https://www.youtube.com/watch?v=oMW59TKZvaI' },
    { id:'wu12', name:'Torso Twists', muscles:'Obliques, thoracic spine', sets:'30s', reps:'continuous', tips:'Feet shoulder-width, arms out. Rotate torso side to side. Keep hips facing forward.', category:'warmup', video:'https://www.youtube.com/watch?v=LqdvhvePVFU' },
  ],
  vinyasa: [
    { id:'v1', name:'Vinyasa → Mountain Pose', muscles:'Full body, breath, posture', sets:'3-5 rounds', reps:'flow', tips:'Sun Salutation A: Mountain → Forward Fold → Halfway Lift → Chaturanga → Up Dog → Down Dog → step forward → Mountain. Match breath to movement.', category:'vinyasa', video:'https://www.youtube.com/watch?v=nic2mjLRYKg' },
    { id:'v2', name:'Vinyasa → Plank Hold', muscles:'Core, shoulders, chest', sets:'3 rounds', reps:'30s hold', tips:'Flow through Sun Sal A but hold plank for 30s before lowering to chaturanga. Engage core, straight line head to heels.', category:'vinyasa', video:'https://www.youtube.com/watch?v=dCPRn1ZF0pk' },
    { id:'v3', name:'Vinyasa → Side Plank', muscles:'Obliques, shoulders, balance', sets:'3 rounds', reps:'30s each side', tips:'From plank, rotate to side plank. Stack feet or stagger. Top arm to sky. Hold 30s, switch sides. Keep hips lifted.', category:'vinyasa', video:'https://www.youtube.com/watch?v=_J6aGhFKAfI' },
  ],
  stretch: [
    { id:'s1', name:'90/90 Hip Stretch', muscles:'Hip rotators', sets:'30-60s', reps:'each side', tips:'Front leg 90°, back leg 90°. Sit tall, lean forward gently. Breathe deeply.', category:'stretch', video:'https://www.youtube.com/watch?v=VYvMMw8z3rE' },
    { id:'s2', name:'Pigeon Pose', muscles:'Hip flexors, glutes', sets:'30-60s', reps:'each side', tips:'Front shin across mat, back leg extended. Square hips. Fold forward for deeper stretch.', category:'stretch', video:'https://www.youtube.com/watch?v=op-eDU9eNqM' },
    { id:'s3', name:'Deep Squat Hold (Malasana)', muscles:'Hips, ankles, inner thighs', sets:'60s', reps:'hold', tips:'Feet wider than hips, toes out. Elbows press knees out. Spine long.', category:'stretch', video:'https://www.youtube.com/watch?v=d-YleDG6Xu4' },
    { id:'s4', name:'Hip Flexor Lunge Stretch', muscles:'Hip flexors, psoas', sets:'30-60s', reps:'each side', tips:'Low lunge, back knee down. Push hips forward. Reach arm overhead for deeper stretch.', category:'stretch', video:'https://www.youtube.com/watch?v=NVzs5gy11wQ' },
    { id:'s5', name:'Figure-4 Stretch', muscles:'Piriformis, glutes', sets:'30-60s', reps:'each side', tips:'On back, ankle on opposite knee. Pull bottom leg toward chest. Keep head down.', category:'stretch', video:'https://www.youtube.com/watch?v=Xb5gHdYtHnk' },
    { id:'s6', name:'Butterfly Stretch', muscles:'Inner thighs, hips', sets:'60s', reps:'hold', tips:'Soles together, knees out. Hold feet, gently press knees down. Sit tall.', category:'stretch', video:'https://www.youtube.com/watch?v=4J7kbCmPScQ' },
    { id:'s7', name:'Happy Baby Pose', muscles:'Inner thighs, hips, lower back', sets:'60s', reps:'hold', tips:'On back, grab outside of feet. Pull knees toward armpits. Rock gently.', category:'stretch', video:'https://www.youtube.com/watch?v=Rg8L0_ZDick' },
    { id:'s8', name:'Frog Stretch', muscles:'Inner thighs, groin', sets:'30-60s', reps:'hold', tips:'Knees wide on all fours, push hips back. Go only as far as comfortable.', category:'stretch', video:'https://www.youtube.com/watch?v=vDC0FoknW-w' },
    { id:'s9', name:'Lizard Pose', muscles:'Hip flexors, hamstrings', sets:'30-60s', reps:'each side', tips:'Low lunge, both hands inside front foot. Drop to forearms for depth.', category:'stretch', video:'https://www.youtube.com/watch?v=W_oWXtvTUB0' },
    { id:'s10', name:'Reclined Twist', muscles:'Spine, obliques, hips', sets:'30-60s', reps:'each side', tips:'On back, knees to one side, arms out. Look opposite direction. Let gravity do the work.', category:'stretch', video:'https://www.youtube.com/watch?v=V5-z1_1FH4w' },
    { id:'s11', name:'Standing Hamstring Stretch', muscles:'Hamstrings', sets:'30-60s', reps:'each side', tips:'Place heel on low surface, keep leg straight. Hinge at hips, reach toward toes. Keep back flat, feel the pull behind the knee.', category:'stretch', video:'https://www.youtube.com/watch?v=FDwpEdxZ4H4' },
    { id:'s12', name:'Seated Forward Fold', muscles:'Hamstrings, lower back', sets:'30-60s', reps:'hold', tips:'Sit with legs straight, reach for toes. Keep back as flat as possible, fold from hips not upper back. Breathe into the stretch.', category:'stretch', video:'https://www.youtube.com/watch?v=Xn1wigQSrmI' },
    { id:'s13', name:'Standing Quad Stretch', muscles:'Quadriceps, hip flexors', sets:'30-60s', reps:'each side', tips:'Stand on one leg, pull opposite heel to glute. Keep knees together, push hips slightly forward. Hold wall for balance if needed.', category:'stretch', video:'https://www.youtube.com/watch?v=Td-9CSgSFhs' },
    { id:'s14', name:'Wall Calf Stretch', muscles:'Calves, Achilles tendon', sets:'30-60s', reps:'each side', tips:'Hands on wall, one foot back with heel pressed to floor. Lean forward until you feel stretch in back calf. Keep back leg straight.', category:'stretch', video:'https://www.youtube.com/watch?v=YTYQo4WvJHA' },
    { id:'s15', name:'Lying Hamstring Stretch (Strap)', muscles:'Hamstrings, calves', sets:'30-60s', reps:'each side', tips:'On back, loop towel/strap around foot. Pull leg toward ceiling keeping it straight. Keep opposite leg flat on floor. Flex foot for calf stretch.', category:'stretch', video:'https://www.youtube.com/watch?v=Il1L75v6gq0' },
  ],
  kb: [
    { id:'k1', name:'Kettlebell Swings', muscles:'Glutes, hamstrings, core, shoulders', sets:'3', reps:'15', rest:15, tips:'Hip hinge, snap hips forward. Arms guide—don\'t lift with shoulders. Breathe out at top. Moderate weight (25-35 lb).', category:'kb', video:'https://www.youtube.com/watch?v=cY38L70lxro' },
    { id:'k2', name:'Kettlebell Chest Press', muscles:'Chest, triceps', sets:'1', reps:'15', rest:15, tips:'Floor press. Lower with control, elbows at 45°. Press straight up, squeeze chest at top. Can use dumbbell substitute.', category:'kb', video:'https://www.youtube.com/watch?v=4ULa6AJcjr8' },
    { id:'k3', name:'Kettlebell Rotational Swings', muscles:'Obliques, core, shoulders', sets:'3', reps:'15/side', rest:15, tips:'Swing bell side to side in front of body. Rotate from hips and core, not arms. Control the momentum. ⚠️ PKD: use moderate weight, avoid straining.', category:'kb', video:'https://www.youtube.com/watch?v=gxmlcxiSpTA' },
  ],
  glute: [
    { id:'g1', name:'Glute Bridges', muscles:'Glutes, hamstrings', sets:'3', reps:'15', rest:30, tips:'Feet flat, drive hips up squeezing glutes at top. Hold 1-2s. Lower with control.', category:'glute', video:'https://www.youtube.com/watch?v=OUgsJ8-Vi0E' },
    { id:'g2', name:'Hip Thrusts (BW/DB)', muscles:'Glutes, hamstrings', sets:'3', reps:'12', rest:30, tips:'Upper back on bench, feet flat. Drive hips up to full extension. Squeeze glutes hard at top. Add DB on hips for resistance.', category:'glute', video:'https://www.youtube.com/watch?v=SEdqd1n0cvg' },
    { id:'g3', name:'Banded Lateral Walks', muscles:'Glute medius, hip abductors', sets:'3', reps:'12/side', rest:22, tips:'Band above knees, quarter squat. Step sideways keeping tension. Stay low, don\'t let knees cave.', category:'glute', video:'https://www.youtube.com/watch?v=PhNkkOieB-8' },
    { id:'g4', name:'Single-Leg Deadlift', muscles:'Hamstrings, glutes, balance', sets:'3', reps:'10/leg', rest:30, tips:'Hinge at hip on one leg, back leg extends behind. Keep back flat, slight knee bend. DB in opposite hand.', category:'glute', video:'https://www.youtube.com/watch?v=vwbYrwrF8fM' },
    { id:'g5', name:'Donkey Kicks', muscles:'Glutes', sets:'3', reps:'15/leg', rest:15, tips:'On all fours, drive one heel toward ceiling. Squeeze glute at top. Don\'t arch lower back.', category:'glute', video:'https://www.youtube.com/watch?v=SJ1Xuz9D-ZQ' },
    { id:'g6', name:'Fire Hydrants', muscles:'Glute medius, hip abductors', sets:'3', reps:'15/leg', rest:15, tips:'On all fours, lift knee out to side keeping 90° bend. Control the movement. Squeeze at top.', category:'glute', video:'https://www.youtube.com/watch?v=MRJsG9it4tg' },
  ],
  abs: [
    { id:'ab1', name:'Dead Bug', muscles:'Deep core, transverse abdominis', sets:'3', reps:'10/side', rest:15, tips:'On back, arms up, opposite arm/leg extend. Lower back stays flat on floor. Slow and controlled. ⚠️ PKD: great core exercise — no straining.', category:'abs', video:'https://www.youtube.com/watch?v=I5xbsA71v1A' },
    { id:'ab2', name:'Bicycle Crunches', muscles:'Obliques, rectus abdominis', sets:'3', reps:'15/side', rest:15, tips:'Hands behind head, elbow to opposite knee. Slow and deliberate — don\'t yank your neck. Breathe out on each twist.', category:'abs', video:'https://www.youtube.com/watch?v=9FGilxCbdz8' },
    { id:'ab3', name:'Leg Raises', muscles:'Lower abs, hip flexors', sets:'3', reps:'12', rest:15, tips:'Lie flat, hands under hips for support. Raise legs to 90°, lower slowly without touching floor. ⚠️ PKD: stop if lower back lifts.', category:'abs', video:'https://www.youtube.com/watch?v=JB2oyawG9KI' },
    { id:'ab4', name:'Flutter Kicks', muscles:'Lower abs, hip flexors', sets:'3', reps:'30s', rest:15, tips:'Lie flat, lift legs 6 inches, alternate small kicks. Keep lower back pressed to floor. Breathe steadily.', category:'abs', video:'https://www.youtube.com/watch?v=ANVdMDaYRts' },
    { id:'ab5', name:'Russian Twists', muscles:'Obliques, core', sets:'3', reps:'15/side', rest:15, tips:'Seated, lean back slightly, feet off floor. Rotate torso side to side. Hold light DB for extra challenge. ⚠️ PKD: bodyweight only, no heavy weight.', category:'abs', video:'https://www.youtube.com/watch?v=wkD8rjkodUI' },
    { id:'ab6', name:'Hollow Body Hold', muscles:'Deep core, rectus abdominis', sets:'3', reps:'20-30s hold', rest:15, tips:'On back, arms overhead, legs straight and lifted. Press lower back into floor. Hold position. Scale by bending knees.', category:'abs', video:'https://www.youtube.com/watch?v=HAfUt2Cco74' },
    { id:'ab7', name:'Reverse Crunches', muscles:'Lower abs', sets:'3', reps:'12', rest:15, tips:'On back, knees bent 90°. Curl hips off floor bringing knees toward chest. Lower with control. Don\'t use momentum.', category:'abs', video:'https://www.youtube.com/watch?v=hyv14e2QDq0' },
    { id:'ab8', name:'V-Ups', muscles:'Upper & lower abs', sets:'3', reps:'10', rest:15, tips:'Lie flat, simultaneously lift legs and torso to form a V. Touch toes at top. Lower with control. ⚠️ PKD: skip if too intense on core pressure.', category:'abs', video:'https://www.youtube.com/watch?v=iP2fjvG0g3w' },
  ],
  senior: [
    { id:'sr1', name:'Gentle Walking', muscles:'Cardio, legs, endurance', sets:'1', reps:'10-15 min', tips:'Walk at a comfortable pace. Focus on good posture — head up, shoulders back, arms swinging naturally. Breathe steadily.', category:'senior', video:'https://www.youtube.com/watch?v=EgUpLgyx0zo' },
    { id:'sr2', name:'Chair Squats', muscles:'Quads, glutes', sets:'2', reps:'8-10', rest:30, tips:'Stand in front of a sturdy chair. Sit back slowly until you lightly touch the seat, then stand back up. Use armrests if needed.', category:'senior', video:'https://www.youtube.com/watch?v=w2jbtOQ_bdM' },
    { id:'sr3', name:'Wall Push-ups', muscles:'Chest, shoulders, triceps', sets:'2', reps:'8-10', rest:30, tips:'Hands on wall at shoulder height, shoulder-width apart. Lean in, push back. Keep body straight. Easy on the wrists.', category:'senior', video:'https://www.youtube.com/watch?v=ZUuYbRgcHmg' },
    { id:'sr4', name:'Seated Shoulder Press', muscles:'Shoulders, triceps', sets:'2', reps:'8-10', rest:30, tips:'Sit in a sturdy chair. Use very light dumbbells (2-5 lbs) or water bottles. Press overhead slowly, lower with control.', category:'senior', video:'https://www.youtube.com/watch?v=1jYq9QQEWqE' },
    { id:'sr5', name:'Seated Rows (Band)', muscles:'Upper back, biceps', sets:'2', reps:'10', rest:30, tips:'Sit with legs extended, band around feet. Pull band toward belly, squeeze shoulder blades. Slow and controlled.', category:'senior', video:'https://www.youtube.com/watch?v=xQNrFHEMhI4' },
    { id:'sr6', name:'Heel-to-Toe Walk', muscles:'Balance, calves, ankles', sets:'1', reps:'2 lengths (20 steps)', tips:'Walk in a straight line placing heel directly in front of opposite toe. Use a wall or counter for balance support. Go slowly.', category:'senior', video:'https://www.youtube.com/watch?v=z_GKdFf3qv4' },
    { id:'sr7', name:'Standing Calf Raises (Chair)', muscles:'Calves, ankles, balance', sets:'2', reps:'10', rest:22, tips:'Hold the back of a chair for support. Rise onto toes slowly, hold 1-2 seconds at top, lower with control.', category:'senior', video:'https://www.youtube.com/watch?v=gwLzBJYoWlI' },
    { id:'sr8', name:'Seated Leg Extensions', muscles:'Quads', sets:'2', reps:'10/leg', rest:22, tips:'Sit in a sturdy chair. Extend one leg straight out, hold 2 seconds, lower slowly. Keep back against chair.', category:'senior', video:'https://www.youtube.com/watch?v=YyvSfVjQeL0' },
    { id:'sr9', name:'Arm Circles', muscles:'Shoulders, rotator cuff', sets:'1', reps:'10 each direction', tips:'Arms out to sides at shoulder height. Small circles forward, then backward. Keep shoulders relaxed. No weights needed.', category:'senior', video:'https://www.youtube.com/watch?v=bP52FXTlzjA' },
    { id:'sr10', name:'Standing Hip Abduction (Chair)', muscles:'Hip abductors, glutes, balance', sets:'2', reps:'8/leg', rest:22, tips:'Hold chair for support. Lift one leg out to the side, keep toes forward. Lower slowly. Don\'t lean to the side.', category:'senior', video:'https://www.youtube.com/watch?v=qBqKuEQl9sI' },
    { id:'sr11', name:'Single-Leg Stand (Chair)', muscles:'Balance, ankles, core', sets:'1', reps:'20s/leg', tips:'Hold chair lightly with one hand. Lift one foot slightly off floor. Hold 20 seconds. Try to gradually use less hand support.', category:'senior', video:'https://www.youtube.com/watch?v=7SF7AYh2_Yw' },
    { id:'sr12', name:'Seated Bicep Curls', muscles:'Biceps', sets:'2', reps:'10', rest:22, tips:'Sit in a chair, very light weights (2-5 lbs). Curl slowly, squeeze at top, lower with control. Keep elbows at sides.', category:'senior', video:'https://www.youtube.com/watch?v=iui51E31sX8' },
    { id:'sr13', name:'Marching in Place', muscles:'Cardio, hip flexors, balance', sets:'1', reps:'1-2 min', tips:'Stand tall, march in place lifting knees to a comfortable height. Swing arms naturally. Hold chair if needed for balance.', category:'senior', video:'https://www.youtube.com/watch?v=2MoGxae-zyo' },
    { id:'sr14', name:'Seated Torso Twist', muscles:'Obliques, spine mobility', sets:'1', reps:'8 each side', tips:'Sit tall in chair, hands on shoulders. Rotate torso left and right slowly. Keep hips facing forward. Breathe naturally.', category:'senior', video:'https://www.youtube.com/watch?v=W2zsmiJ9Lpk' },
    { id:'sr15', name:'Wall Slides', muscles:'Shoulders, upper back, posture', sets:'2', reps:'8', rest:22, tips:'Stand with back against wall, arms in "goalpost" position. Slide arms up and down the wall. Great for posture.', category:'senior', video:'https://www.youtube.com/watch?v=d6V2Exzb324' },
    { id:'sr16', name:'Gentle Step-ups', muscles:'Quads, glutes, balance', sets:'2', reps:'6/leg', rest:30, tips:'Use a low step (4-6 inches) or bottom stair. Step up with one foot, bring the other up, step back down. Hold railing for support.', category:'senior', video:'https://www.youtube.com/watch?v=WCFCdxzFBa4' },
  ]
};

// ===== Flow45 9-WEEK CYCLE LOGIC =====
var CYCLE_START = new Date(2026, 1, 2); // Feb 2, 2026 (Monday)

function getCycleInfo() {
  var now = new Date();
  var daysSinceStart = Math.floor((now - CYCLE_START) / (1000*60*60*24));
  if (daysSinceStart < 0) {
    return { weekNum: 0, phase: 1, weekInPhase: 1, isRecovery: false, label: 'Flow45 — Phase 1, Week 1 — INTENSITY 🔥' };
  }
  var weekNum = Math.floor(daysSinceStart / 7) % 9;
  var phase = weekNum < 3 ? 1 : weekNum < 6 ? 2 : 3;
  var weekInPhase = (weekNum % 3) + 1;
  var isRecovery = weekInPhase === 3;
  var label = 'Flow45 — Phase ' + phase + ', Week ' + weekInPhase + ' — ' + (isRecovery ? 'RECOVERY 🧘' : 'INTENSITY 🔥');
  return { weekNum: weekNum, phase: phase, weekInPhase: weekInPhase, isRecovery: isRecovery, label: label };
}

// ===== SCHEDULES =====
var E = EXERCISES;
var WEEK_SCHEDULES = [];

// Phase 1 Intensity
var P1_INTENSE = {
  1: { title: 'Monday — Chest + Back + Abs', subtitle: '💪 Push & Pull Supersets + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[3], E.warmup[8], E.warmup[1]], isFlow: true },
      { name: '🏋️ Chest + Back', time: '25 min', exercises: [E.push[0], E.pull[0], E.push[1], E.pull[1], E.bodyweight[0], E.bodyweight[3], E.push[2], E.pull[2], E.bodyweight[1], E.compound[2]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[0], E.abs[1], E.abs[3], E.abs[6], E.bodyweight[9]] },
      { name: '🧘 Hip Stretching', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Cardio Circuit', subtitle: '🔥 HIIT + 45s work / 15s rest', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[4], E.warmup[6], E.warmup[5], E.warmup[11]], isFlow: true },
      { name: '⚡ HIIT WB (4 min)', time: '4 min', exercises: [E.bodyweight[5], E.bodyweight[4], E.bodyweight[16], E.bodyweight[17]], isHIIT: true },
      { name: '🔥 Cardio Circuit', time: '25 min', exercises: [E.kb[0], E.flow[2], E.bodyweight[4], E.flow[0], E.bodyweight[5], E.flow[1], E.bodyweight[6], E.compound[0], E.flow[4], E.bodyweight[7], E.kb[2], E.glute[0], E.bodyweight[8], E.legs[1], E.abs[0]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Arms + Shoulders + Abs', subtitle: '💪 Biceps, Triceps, Delts + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[10], E.warmup[9], E.warmup[2], E.warmup[7]], isFlow: true },
      { name: '🏋️ Arms + Shoulders', time: '25 min', exercises: [E.pull[4], E.push[4], E.pull[5], E.push[3], E.push[5], E.pull[3], E.bodyweight[2], E.bodyweight[12], E.push[6], E.push[7], E.bodyweight[11]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[2], E.abs[4], E.abs[6], E.abs[5], E.bodyweight[10]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🧘 Fat Burn + Deep Stretch', est: '~45 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '25 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.yoga[4], E.stretch[1], E.stretch[8], E.stretch[2]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '10 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6], E.stretch[7]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Legs + Back + Abs', subtitle: '🦵 Lower Body + Pull + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[5], E.warmup[1], E.warmup[9]], isFlow: true },
      { name: '🏋️ Legs + Back', time: '25 min', exercises: [E.legs[1], E.pull[0], E.legs[0], E.pull[1], E.legs[2], E.bodyweight[3], E.legs[3], E.legs[4], E.legs[5], E.glute[3], E.kb[0]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[5], E.abs[7], E.abs[1], E.abs[3], E.bodyweight[14]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[8], E.stretch[9]], isStretch: true },
    ]
  }
};

var RECOVERY_WEEK = {
  1: { title: 'Monday — Light Cardio + Full Body Stretch', subtitle: '🧘 Recovery Week', est: '~45 min',
    sections: [
      { name: '🏃 Light Cardio', time: '15 min', exercises: [E.warmup[0], E.warmup[6], E.warmup[10], E.warmup[5], E.warmup[4], E.warmup[11]], isFlow: true },
      { name: '🧘 Hip Stretches', time: '10 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[8]], isStretch: true },
      { name: '🦵 Hamstring + Quad + Calf', time: '12 min', exercises: [E.stretch[10], E.stretch[11], E.stretch[14], E.stretch[12], E.stretch[13]], isStretch: true },
      { name: '🧘‍♀️ Yoga Cooldown', time: '8 min', exercises: [E.yoga[0], E.yoga[3], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Cardio Circuit + Lower Body Stretch', subtitle: '🧘 Recovery Week', est: '~45 min',
    sections: [
      { name: '🏃 Cardio Circuit', time: '20 min', exercises: [E.warmup[0], E.warmup[4], E.kb[0], E.warmup[6], E.flow[2], E.warmup[10], E.bodyweight[4], E.flow[0]], isFlow: true },
      { name: '🦵 Hamstring + Calf Focus', time: '10 min', exercises: [E.stretch[10], E.stretch[14], E.stretch[11], E.stretch[13]], isStretch: true },
      { name: '🧘 Hip + Quad Stretch', time: '10 min', exercises: [E.stretch[0], E.stretch[3], E.stretch[12], E.stretch[4]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '5 min', exercises: [E.stretch[6], E.stretch[9]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Yoga + Full Flexibility', subtitle: '🧘 Recovery Week — Deep Stretch', est: '~45 min',
    sections: [
      { name: '🏃 Light Cardio Warmup', time: '10 min', exercises: [E.warmup[0], E.warmup[6], E.warmup[5], E.warmup[11]], isFlow: true },
      { name: '🔥 Vinyasa Flow', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Hip Openers', time: '8 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[5], E.stretch[7]], isStretch: true },
      { name: '🦵 Legs: Hamstrings, Quads, Calves', time: '10 min', exercises: [E.stretch[10], E.stretch[14], E.stretch[12], E.stretch[13], E.stretch[11]], isStretch: true },
      { name: '🧘‍♀️ Yoga Poses + Breathing', time: '8 min', exercises: [E.yoga[1], E.yoga[2], E.yoga[3], E.yoga[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🌿 Recovery — Deep Stretch & Flow', est: '~45 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '15 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.yoga[4], E.stretch[1], E.stretch[8]], isStretch: true },
      { name: '🦵 Hamstring + Calf + Quad', time: '10 min', exercises: [E.stretch[10], E.stretch[14], E.stretch[12], E.stretch[13]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '7 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[6]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Active Recovery + Full Stretch', subtitle: '🧘 Recovery Week — Movement + Mobility', est: '~45 min',
    sections: [
      { name: '🏃 Cardio Circuit', time: '18 min', exercises: [E.warmup[0], E.warmup[6], E.kb[0], E.warmup[4], E.flow[2], E.warmup[10], E.warmup[5]], isFlow: true },
      { name: '🧘 Hip Stretches', time: '8 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[7]], isStretch: true },
      { name: '🦵 Hamstring + Quad + Calf', time: '10 min', exercises: [E.stretch[10], E.stretch[11], E.stretch[14], E.stretch[12], E.stretch[13]], isStretch: true },
      { name: '🧘‍♀️ Yoga Cooldown', time: '10 min', exercises: [E.yoga[0], E.yoga[1], E.yoga[3], E.stretch[9]], isStretch: true },
    ]
  }
};

var P2_INTENSE = {
  1: { title: 'Monday — Legs + Shoulders + Abs', subtitle: '🦵💪 Lower Body + Delts + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[3], E.warmup[8], E.warmup[1]], isFlow: true },
      { name: '🏋️ Legs + Shoulders', time: '20 min', exercises: [E.legs[1], E.legs[4], E.legs[2], E.push[3], E.push[5], E.push[7], E.kb[0]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[0], E.abs[2], E.abs[5], E.bodyweight[9]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[3], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Chest + Triceps', subtitle: '💪 Push Focus', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[4], E.warmup[6], E.warmup[5], E.warmup[11]], isFlow: true },
      { name: '🏋️ Chest + Triceps', time: '25 min', exercises: [E.push[0], E.push[1], E.push[2], E.bodyweight[1], E.bodyweight[2], E.push[4], E.bodyweight[12]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Back + Biceps + Abs', subtitle: '🔙 Pull Focus + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[10], E.warmup[9], E.warmup[2], E.warmup[7]], isFlow: true },
      { name: '🏋️ Back + Biceps', time: '20 min', exercises: [E.pull[0], E.pull[1], E.bodyweight[3], E.pull[2], E.pull[3], E.pull[4], E.pull[5]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[1], E.abs[3], E.abs[6], E.bodyweight[10]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🧘 Fat Burn + Deep Stretch', est: '~45 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '25 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.yoga[4], E.stretch[1], E.stretch[8], E.stretch[2]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '10 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6], E.stretch[7]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Full Body Cardio + Abs', subtitle: '🔥 Total Body Blitz + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[5], E.warmup[1], E.warmup[9]], isFlow: true },
      { name: '🔥 Full Body Circuit', time: '22 min', exercises: [E.bodyweight[8], E.compound[0], E.bodyweight[9], E.bodyweight[10], E.kb[0], E.bodyweight[4], E.bodyweight[5], E.bodyweight[11]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[4], E.abs[7], E.abs[0], E.bodyweight[14]] },
      { name: '⚡ HIIT WB Finisher (4 min)', time: '4 min', exercises: [E.bodyweight[5], E.bodyweight[4], E.bodyweight[16], E.bodyweight[17]], isHIIT: true },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  }
};

var P3_INTENSE = {
  1: { title: 'Monday — Push Power + Abs', subtitle: '💪 Heavy Push Day + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[3], E.warmup[8], E.warmup[1]], isFlow: true },
      { name: '🏋️ Push Power', time: '20 min', exercises: [E.push[1], E.push[0], E.push[3], E.bodyweight[11], E.bodyweight[0], E.push[4], E.kb[1]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[2], E.abs[5], E.abs[1], E.bodyweight[13]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Legs + Core', subtitle: '🦵 Lower Body + Core Blast', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[4], E.warmup[6], E.warmup[5], E.warmup[11]], isFlow: true },
      { name: '🏋️ Legs + Core', time: '30 min', exercises: [E.legs[0], E.legs[1], E.legs[5], E.legs[3], E.bodyweight[9], E.bodyweight[13], E.bodyweight[4], E.kb[0]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[9]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Pull + Cardio + Abs', subtitle: '🔙🔥 Back + Conditioning + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[10], E.warmup[9], E.warmup[2], E.warmup[7]], isFlow: true },
      { name: '🏋️ Pull + Cardio', time: '22 min', exercises: [E.bodyweight[3], E.pull[1], E.pull[0], E.pull[4], E.compound[2], E.flow[0], E.kb[2], E.bodyweight[6]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[0], E.abs[4], E.abs[7], E.bodyweight[10]] },
      { name: '⚡ HIIT WB Finisher (4 min)', time: '4 min', exercises: [E.bodyweight[5], E.bodyweight[4], E.bodyweight[16], E.bodyweight[17]], isHIIT: true },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🧘 Fat Burn + Deep Stretch', est: '~45 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '25 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.yoga[4], E.stretch[1], E.stretch[8], E.stretch[2]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '10 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6], E.stretch[7]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Total Body Burnout + Abs', subtitle: '🔥 Circuit: 3 rounds + Core', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[5], E.warmup[1], E.warmup[9]], isFlow: true },
      { name: '🔥 Total Body Burnout (3 rounds)', time: '22 min', exercises: [E.push[0], E.bodyweight[3], E.legs[1], E.push[3], E.pull[4], E.kb[0], E.bodyweight[9]] },
      { name: '🎯 Ab Finisher', time: '7 min', exercises: [E.abs[3], E.abs[6], E.abs[5], E.bodyweight[14]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[9]], isStretch: true },
    ]
  }
};

// Men's schedules
var WEEK_SCHEDULES_M = [];
WEEK_SCHEDULES_M[0] = P1_INTENSE;
WEEK_SCHEDULES_M[1] = P1_INTENSE;
WEEK_SCHEDULES_M[2] = RECOVERY_WEEK;
WEEK_SCHEDULES_M[3] = P2_INTENSE;
WEEK_SCHEDULES_M[4] = P2_INTENSE;
WEEK_SCHEDULES_M[5] = RECOVERY_WEEK;
WEEK_SCHEDULES_M[6] = P3_INTENSE;
WEEK_SCHEDULES_M[7] = P3_INTENSE;
WEEK_SCHEDULES_M[8] = RECOVERY_WEEK;

WEEK_SCHEDULES[0] = P1_INTENSE;
WEEK_SCHEDULES[1] = P1_INTENSE;
WEEK_SCHEDULES[2] = RECOVERY_WEEK;
WEEK_SCHEDULES[3] = P2_INTENSE;
WEEK_SCHEDULES[4] = P2_INTENSE;
WEEK_SCHEDULES[5] = RECOVERY_WEEK;
WEEK_SCHEDULES[6] = P3_INTENSE;
WEEK_SCHEDULES[7] = P3_INTENSE;
WEEK_SCHEDULES[8] = RECOVERY_WEEK;

// Women's schedules
var P1W_INTENSE = {
  1: { title: 'Monday — Glutes + Back', subtitle: '🍑 Lower Body Pull Focus', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[3], E.warmup[8], E.warmup[1]], isFlow: true },
      { name: '🏋️ Glutes + Back', time: '25 min', exercises: [E.glute[0], E.glute[1], E.pull[1], E.glute[3], E.pull[0], E.glute[2], E.bodyweight[3]] },
      { name: '🧘 Hip Stretching', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Cardio Circuit', subtitle: '🔥 Lower-Body Emphasis, 45s/15s, 2 rounds', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[4], E.warmup[6], E.warmup[5], E.warmup[11]], isFlow: true },
      { name: '🔥 Cardio Circuit', time: '30 min', exercises: [E.kb[0], E.flow[2], E.glute[0], E.flow[0], E.bodyweight[4], E.glute[4], E.glute[5], E.legs[4], E.flow[4], E.legs[5]] },
      { name: '⚡ HIIT WB Finisher (4 min)', time: '4 min', exercises: [E.bodyweight[5], E.bodyweight[4], E.bodyweight[16], E.bodyweight[17]], isHIIT: true },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Arms + Shoulders', subtitle: '💪 Higher Rep, Lighter Weight', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[10], E.warmup[9], E.warmup[2], E.warmup[7]], isFlow: true },
      { name: '🏋️ Arms + Shoulders', time: '25 min', exercises: [E.pull[4], E.push[4], E.pull[5], E.push[3], E.push[5], E.push[6], E.push[7], E.glute[2]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🧘 Fat Burn + Deep Stretch', est: '~45 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '25 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.yoga[4], E.stretch[1], E.stretch[8], E.stretch[2]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '10 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6], E.stretch[7]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Legs + Glutes', subtitle: '🦵🍑 Lower Body Power', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[5], E.warmup[1], E.warmup[9]], isFlow: true },
      { name: '🏋️ Legs + Glutes', time: '25 min', exercises: [E.legs[1], E.glute[1], E.legs[0], E.glute[3], E.legs[5], E.legs[3], E.glute[0], E.kb[0]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[8], E.stretch[9]], isStretch: true },
    ]
  }
};

var P2W_INTENSE = {
  1: { title: 'Monday — Legs + Shoulders', subtitle: '🦵💪 Lower Body + Delts', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[3], E.warmup[8], E.warmup[1]], isFlow: true },
      { name: '🏋️ Legs + Shoulders', time: '25 min', exercises: [E.legs[1], E.legs[4], E.glute[1], E.push[3], E.push[5], E.glute[2], E.kb[0]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[3], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Chest + Triceps', subtitle: '💪 Higher Rep Push', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[4], E.warmup[6], E.warmup[5], E.warmup[11]], isFlow: true },
      { name: '🏋️ Chest + Triceps', time: '25 min', exercises: [E.push[0], E.push[2], E.bodyweight[0], E.bodyweight[2], E.push[4], E.glute[0], E.bodyweight[12]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Back + Glutes', subtitle: '🔙🍑 Pull + Lower Body', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[10], E.warmup[9], E.warmup[2], E.warmup[7]], isFlow: true },
      { name: '🏋️ Back + Glutes', time: '25 min', exercises: [E.pull[0], E.pull[1], E.glute[1], E.pull[2], E.glute[3], E.pull[4], E.pull[5]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🧘 Fat Burn + Deep Stretch', est: '~45 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '25 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.yoga[4], E.stretch[1], E.stretch[8], E.stretch[2]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '10 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6], E.stretch[7]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Full Body Cardio Circuit', subtitle: '🔥 Lower-Body Emphasis Blitz', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[5], E.warmup[1], E.warmup[9]], isFlow: true },
      { name: '🔥 Full Body Circuit', time: '30 min', exercises: [E.glute[0], E.compound[0], E.bodyweight[9], E.glute[4], E.kb[0], E.bodyweight[4], E.glute[5], E.legs[5]] },
      { name: '⚡ HIIT WB Finisher (4 min)', time: '4 min', exercises: [E.bodyweight[5], E.bodyweight[4], E.bodyweight[16], E.bodyweight[17]], isHIIT: true },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  }
};

var P3W_INTENSE = {
  1: { title: 'Monday — Push + Glutes', subtitle: '💪🍑 Upper + Lower', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[3], E.warmup[8], E.warmup[1]], isFlow: true },
      { name: '🏋️ Push + Glutes', time: '25 min', exercises: [E.push[1], E.push[0], E.glute[1], E.bodyweight[0], E.glute[2], E.push[4], E.glute[0]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Legs + Core', subtitle: '🦵 Lower Body + Core Blast', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[4], E.warmup[6], E.warmup[5], E.warmup[11]], isFlow: true },
      { name: '🏋️ Legs + Core', time: '30 min', exercises: [E.legs[0], E.glute[1], E.legs[5], E.glute[3], E.bodyweight[9], E.bodyweight[13], E.glute[4], E.kb[0]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[9]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Pull + Cardio', subtitle: '🔙🔥 Back + Conditioning', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[10], E.warmup[9], E.warmup[2], E.warmup[7]], isFlow: true },
      { name: '🏋️ Pull + Cardio', time: '30 min', exercises: [E.bodyweight[3], E.pull[1], E.pull[0], E.pull[4], E.glute[2], E.flow[0], E.kb[0], E.glute[5]] },
      { name: '⚡ HIIT WB Finisher (4 min)', time: '4 min', exercises: [E.bodyweight[5], E.bodyweight[4], E.bodyweight[16], E.bodyweight[17]], isHIIT: true },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🧘 Fat Burn + Deep Stretch', est: '~45 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '10 min', exercises: E.vinyasa, isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '25 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.yoga[4], E.stretch[1], E.stretch[8], E.stretch[2]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '10 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6], E.stretch[7]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Total Body Burnout', subtitle: '🔥 Circuit: 3 rounds, 30s rest', est: '~45 min',
    sections: [
      { name: '🏃 Dynamic Warmup', time: '8 min', exercises: [E.warmup[0], E.warmup[5], E.warmup[1], E.warmup[9]], isFlow: true },
      { name: '🔥 Total Body Burnout (3 rounds)', time: '30 min', exercises: [E.glute[1], E.bodyweight[3], E.legs[1], E.push[3], E.glute[3], E.kb[0], E.bodyweight[9]] },
      { name: '🧘 Stretch Cooldown', time: '5 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[9]], isStretch: true },
    ]
  }
};

var WEEK_SCHEDULES_W = [];
WEEK_SCHEDULES_W[0] = P1W_INTENSE;
WEEK_SCHEDULES_W[1] = P1W_INTENSE;
WEEK_SCHEDULES_W[2] = RECOVERY_WEEK;
WEEK_SCHEDULES_W[3] = P2W_INTENSE;
WEEK_SCHEDULES_W[4] = P2W_INTENSE;
WEEK_SCHEDULES_W[5] = RECOVERY_WEEK;
WEEK_SCHEDULES_W[6] = P3W_INTENSE;
WEEK_SCHEDULES_W[7] = P3W_INTENSE;
WEEK_SCHEDULES_W[8] = RECOVERY_WEEK;

// Senior schedules
var Sr = EXERCISES.senior;

var SENIOR_RECOVERY = {
  1: { title: 'Monday — Gentle Walking + Stretching', subtitle: '🌿 Recovery Week', est: '~25 min',
    sections: [
      { name: '🚶 Walking', time: '15 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🧘 Gentle Stretching', time: '10 min', exercises: [E.stretch[4], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Yoga + Breathing', subtitle: '🌿 Recovery Week', est: '~25 min',
    sections: [
      { name: '🧘‍♀️ Gentle Yoga', time: '15 min', exercises: [E.yoga[0], E.yoga[1], E.yoga[3]], isStretch: true },
      { name: '🧘 Stretching', time: '10 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[6]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Walking + Balance', subtitle: '🌿 Recovery Week', est: '~25 min',
    sections: [
      { name: '🚶 Walking', time: '12 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '⚖️ Gentle Balance', time: '8 min', exercises: [Sr[5], Sr[10]], isSeniorBalance: true },
      { name: '🧘 Stretching', time: '5 min', exercises: [E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🌿 Recovery — Gentle Flow & Stretch', est: '~30 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '8 min', exercises: [E.vinyasa[0], E.vinyasa[1]], isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '15 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.stretch[1]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '7 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Walking + Light Movement', subtitle: '🌿 Recovery Week', est: '~25 min',
    sections: [
      { name: '🚶 Walking', time: '15 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🧘 Full Body Stretch', time: '10 min', exercises: [E.stretch[0], E.stretch[3], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  }
};

var P1S_GENTLE = {
  1: { title: 'Monday — Light Upper Body + Walking', subtitle: '🌿 Chair-Assisted Upper Body', est: '~30 min',
    sections: [
      { name: '🚶 Warmup Walk', time: '5 min', exercises: [Sr[12]], isSeniorCardio: true },
      { name: '💪 Upper Body (Chair-Assisted)', time: '15 min', exercises: [Sr[2], Sr[3], Sr[4], Sr[8], Sr[11]] },
      { name: '🚶 Cooldown Walk', time: '5 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🧘 Stretch', time: '5 min', exercises: [E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Walking + Balance', subtitle: '🌿 Balance & Stability Focus', est: '~30 min',
    sections: [
      { name: '🚶 Walking', time: '12 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '⚖️ Balance Work', time: '10 min', exercises: [Sr[5], Sr[10], Sr[6]] },
      { name: '🧘 Stretch', time: '8 min', exercises: [E.stretch[4], E.stretch[5], E.stretch[6]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Light Lower Body + Stretching', subtitle: '🌿 Chair-Assisted Lower Body', est: '~30 min',
    sections: [
      { name: '🚶 Warmup Walk', time: '5 min', exercises: [Sr[12]], isSeniorCardio: true },
      { name: '🦵 Lower Body (Chair-Assisted)', time: '15 min', exercises: [Sr[1], Sr[7], Sr[9], Sr[6]] },
      { name: '🧘 Stretching', time: '10 min', exercises: [E.stretch[0], E.stretch[3], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🌿 Recovery — Gentle Flow & Stretch', est: '~30 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '8 min', exercises: [E.vinyasa[0], E.vinyasa[1]], isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '15 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.stretch[1]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '7 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Walking + Gentle Full Body', subtitle: '🌿 Easy Full Body Movement', est: '~30 min',
    sections: [
      { name: '🚶 Walking', time: '10 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🏋️ Gentle Full Body', time: '12 min', exercises: [Sr[2], Sr[1], Sr[8], Sr[6], Sr[14]] },
      { name: '🧘 Cooldown Stretch', time: '8 min', exercises: [E.stretch[4], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  }
};

var P2S_GENTLE = {
  1: { title: 'Monday — Upper Body + Walking', subtitle: '🌿 Building Strength Gently', est: '~30 min',
    sections: [
      { name: '🚶 Warmup Walk', time: '5 min', exercises: [Sr[12]], isSeniorCardio: true },
      { name: '💪 Upper Body', time: '15 min', exercises: [Sr[2], Sr[3], Sr[4], Sr[11], Sr[14], Sr[8]] },
      { name: '🚶 Cooldown Walk', time: '5 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🧘 Stretch', time: '5 min', exercises: [E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Walking + Balance', subtitle: '🌿 Longer Walk, Balance Challenge', est: '~30 min',
    sections: [
      { name: '🚶 Walking', time: '15 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '⚖️ Balance Work', time: '10 min', exercises: [Sr[5], Sr[10], Sr[6], Sr[12]] },
      { name: '🧘 Stretch', time: '5 min', exercises: [E.stretch[4], E.stretch[6]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Lower Body + Stretching', subtitle: '🌿 Adding Gentle Step-ups', est: '~30 min',
    sections: [
      { name: '🚶 Warmup Walk', time: '5 min', exercises: [Sr[12]], isSeniorCardio: true },
      { name: '🦵 Lower Body', time: '15 min', exercises: [Sr[1], Sr[7], Sr[9], Sr[6], Sr[15]] },
      { name: '🧘 Stretching', time: '10 min', exercises: [E.stretch[0], E.stretch[3], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🌿 Recovery — Gentle Flow & Stretch', est: '~30 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '8 min', exercises: [E.vinyasa[0], E.vinyasa[1]], isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '15 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.stretch[1]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '7 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Walking + Full Body', subtitle: '🌿 Gentle Full Body Circuit', est: '~30 min',
    sections: [
      { name: '🚶 Walking', time: '12 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🏋️ Gentle Full Body', time: '12 min', exercises: [Sr[2], Sr[1], Sr[4], Sr[8], Sr[6], Sr[13]] },
      { name: '🧘 Cooldown Stretch', time: '6 min', exercises: [E.stretch[4], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  }
};

var P3S_GENTLE = {
  1: { title: 'Monday — Upper Body + Walking', subtitle: '🌿 Full Upper Body Routine', est: '~30 min',
    sections: [
      { name: '🚶 Warmup Walk', time: '5 min', exercises: [Sr[12]], isSeniorCardio: true },
      { name: '💪 Upper Body', time: '15 min', exercises: [Sr[2], Sr[3], Sr[4], Sr[11], Sr[14], Sr[8], Sr[13]] },
      { name: '🚶 Cooldown Walk', time: '5 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🧘 Stretch', time: '5 min', exercises: [E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  },
  2: { title: 'Tuesday — Walking + Balance + Core', subtitle: '🌿 Balance & Stability', est: '~30 min',
    sections: [
      { name: '🚶 Walking', time: '15 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '⚖️ Balance + Core', time: '10 min', exercises: [Sr[5], Sr[10], Sr[6], Sr[13], Sr[12]] },
      { name: '🧘 Stretch', time: '5 min', exercises: [E.stretch[4], E.stretch[6]], isStretch: true },
    ]
  },
  3: { title: 'Wednesday — Lower Body + Stretching', subtitle: '🌿 Full Lower Body Routine', est: '~30 min',
    sections: [
      { name: '🚶 Warmup Walk', time: '5 min', exercises: [Sr[12]], isSeniorCardio: true },
      { name: '🦵 Lower Body', time: '15 min', exercises: [Sr[1], Sr[7], Sr[9], Sr[6], Sr[15], Sr[10]] },
      { name: '🧘 Stretching', time: '10 min', exercises: [E.stretch[0], E.stretch[1], E.stretch[3], E.stretch[4], E.stretch[9]], isStretch: true },
    ]
  },
  4: { title: 'Thursday — Yoga + Flexibility', subtitle: '🌿 Recovery — Gentle Flow & Stretch', est: '~30 min',
    sections: [
      { name: '🔥 Vinyasa Warmup', time: '8 min', exercises: [E.vinyasa[0], E.vinyasa[1]], isStretch: true },
      { name: '🧘 Yoga + Stretch Flow', time: '15 min', exercises: [E.yoga[1], E.stretch[3], E.yoga[2], E.yoga[3], E.stretch[0], E.stretch[1]], isStretch: true },
      { name: '🌙 Floor Cooldown', time: '7 min', exercises: [E.stretch[4], E.stretch[9], E.stretch[5], E.stretch[6]], isStretch: true },
    ]
  },
  5: { title: 'Friday — Walking + Full Body', subtitle: '🌿 Gentle Full Body Finish', est: '~30 min',
    sections: [
      { name: '🚶 Walking', time: '12 min', exercises: [Sr[0]], isSeniorCardio: true },
      { name: '🏋️ Full Body', time: '12 min', exercises: [Sr[2], Sr[1], Sr[3], Sr[4], Sr[8], Sr[15], Sr[13]] },
      { name: '🧘 Cooldown Stretch', time: '6 min', exercises: [E.stretch[0], E.stretch[4], E.stretch[5], E.stretch[9]], isStretch: true },
    ]
  }
};

var WEEK_SCHEDULES_SR = [];
WEEK_SCHEDULES_SR[0] = P1S_GENTLE;
WEEK_SCHEDULES_SR[1] = P1S_GENTLE;
WEEK_SCHEDULES_SR[2] = SENIOR_RECOVERY;
WEEK_SCHEDULES_SR[3] = P2S_GENTLE;
WEEK_SCHEDULES_SR[4] = P2S_GENTLE;
WEEK_SCHEDULES_SR[5] = SENIOR_RECOVERY;
WEEK_SCHEDULES_SR[6] = P3S_GENTLE;
WEEK_SCHEDULES_SR[7] = P3S_GENTLE;
WEEK_SCHEDULES_SR[8] = SENIOR_RECOVERY;

// Age tier modifiers
var AGE_MODIFIERS = {
  young:  { setsMult: 1.3, repsMult: 1.3, restMult: 0.8, holdMult: 1.3, label: '💪 Young — Extended Sets' },
  adult:  { setsMult: 1.0, repsMult: 1.0, restMult: 1.0, holdMult: 1.0, label: '🎯 Adult — Standard' },
  senior: { setsMult: 1.0, repsMult: 1.0, restMult: 1.0, holdMult: 1.0, label: '🌿 Senior — Gentle, Walking-Focused' }
};

var SENIOR_SUBS = {
  'bw6': '⚠️ Sub: Step-back burpees only, no jump. Or skip entirely.',
  'bw7': '⚠️ Sub: Marching in place (no high knees).',
  'bw8': '⚠️ Sub: Regular bodyweight squats (no jump).',
};

function applyAgeMod(text, field) {
  var profile = getProfile();
  if (!profile || profile.age === 'adult') return text;
  var mod = AGE_MODIFIERS[profile.age];
  var mult = field === 'rest' ? mod.restMult : (field === 'hold' ? mod.holdMult : mod.repsMult);
  return text.replace(/(\d+)/g, function(m) {
    var n = parseInt(m);
    return Math.round(n * mult);
  });
}

function getAgeLabel() {
  var profile = getProfile();
  if (!profile) return '';
  return AGE_MODIFIERS[profile.age]?.label || '';
}
