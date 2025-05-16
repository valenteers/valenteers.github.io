document.write(`

<!-- Card -->
<div class="bg-base-200">
    <div class="flex justify-center pt-16">
        <div>
            <h1 class="text-5xl font-bold"><a href="/echarts">Graph</a></h1>
        </div>
    </div>
    <div class="flex justify-center py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="card w-96 bg-neutral shadow-xl">
                <div class="flex justify-center min-w-full pt-5 bg-slate-100"><div id="lineRace" style="width: 360px;height:360px;"></div></div>
                <div class="card-body">
                    <h2 class="card-title flex justify-center">Line Race</h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Echarts</div>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-neutral shadow-xl">
                <div class="flex justify-center min-w-full pt-5 bg-slate-100"><div id="barRace" style="width: 360px;height:360px;"></div></div>
                <div class="card-body">
                    <h2 class="card-title flex justify-center">Bar Race</h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Echarts</div> 
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-neutral shadow-xl">
                <div class="flex justify-center min-w-full pt-5 bg-slate-100"><div id="pie" style="width: 360px;height:360px;"></div></div>
                <div class="card-body">
                    <h2 class="card-title flex justify-center">Pie</h2>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Echarts</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="module" src="./component/echarts/BarRace.js"></script>
<script type="module" src="./component/echarts/LineRace.js"></script>
<script type="module" src="./component/echarts/Pie.js"></script>


<!-- End Card -->

`);