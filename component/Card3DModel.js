document.write(`

<!-- Card -->
<div class="bg-base-200">
    <div class="flex justify-center ">
        <div>
            <h1 class="text-5xl font-bold pt-16"><a href="/threejs">3D Model</a></h1>
        </div>
    </div>
    <div class="flex justify-center py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="card w-96 bg-neutral shadow-xl">
                <div class="min-w-full"><canvas id="Polyhedron"></canvas></div>
                <div class="card-body">
                    <h2 class="card-title flex justify-center">Polyhedron</h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Three.js</div> 
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-neutral shadow-xl">
                <div class="min-w-full"><canvas id="Rabbit"></canvas></div>
                <div class="card-body">
                    <h2 class="card-title flex justify-center">Rabbit</h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Three.js</div>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-neutral shadow-xl">
                <div class="min-w-full"><canvas id="OrbitControls"></canvas></div>
                <div class="card-body">
                    <h2 class="card-title flex justify-center">OrbitControls</h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Three.js</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="module" src="./component/threejs/Torus.js"></script>
<script type="module" src="./component/threejs/Polyhedron.js"></script>
<script type="module" src="./component/threejs/Torusknot.js"></script>
<script type="module" src="./component/threejs/Extrude.js"></script>
<script type="module" src="./component/threejs/Rabbit.js"></script>
<script type="module" src="./component/threejs/OrbitControls.js"></script>

<!-- End Card -->

`);